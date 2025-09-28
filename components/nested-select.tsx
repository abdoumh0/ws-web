"use client"
import { ChevronDownIcon, ChevronRightIcon, XIcon, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useState } from "react"

export interface NestedSelectOption {
  id: string
  label: string
  children?: NestedSelectOption[]
}

interface NestedSelectProps {
  options: NestedSelectOption[]
  selectedValues: string[]
  onSelectionChange: (selectedValues: string[]) => void
  placeholder?: string
  className?: string
  leafNodesOnly?: boolean
}

export function NestedSelect({
  options,
  selectedValues,
  onSelectionChange,
  placeholder = "Select options...",
  className,
  leafNodesOnly = false,
}: NestedSelectProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState("")

  const isLeafNode = (option: NestedSelectOption): boolean => {
    return !option.children || option.children.length === 0
  }

  const getAllChildIds = (option: NestedSelectOption): string[] => {
    if (!option.children) return []

    const childIds: string[] = []
    for (const child of option.children) {
      childIds.push(child.id)
      childIds.push(...getAllChildIds(child))
    }
    return childIds
  }

  const getAllLeafChildIds = (option: NestedSelectOption): string[] => {
    if (!option.children) return []

    const leafIds: string[] = []
    for (const child of option.children) {
      if (isLeafNode(child)) {
        leafIds.push(child.id)
      } else {
        leafIds.push(...getAllLeafChildIds(child))
      }
    }
    return leafIds
  }

  const filterOptions = (options: NestedSelectOption[], searchTerm: string): NestedSelectOption[] => {
    if (!searchTerm.trim()) return options

    const filtered: NestedSelectOption[] = []

    for (const option of options) {
      const matchesSearch = option.label.toLowerCase().includes(searchTerm.toLowerCase())
      const filteredChildren = option.children ? filterOptions(option.children, searchTerm) : []

      // Include this option if it matches or has matching children
      if (matchesSearch || filteredChildren.length > 0) {
        filtered.push({
          ...option,
          children: filteredChildren.length > 0 ? filteredChildren : option.children,
        })
      }
    }

    return filtered
  }

  const getAutoExpandedItems = (options: NestedSelectOption[], searchTerm: string): Set<string> => {
    if (!searchTerm.trim()) return expandedItems

    const autoExpanded = new Set<string>()

    const expandParentsWithMatches = (options: NestedSelectOption[]) => {
      for (const option of options) {
        if (option.children) {
          const hasMatchingChildren = option.children.some(
            (child) =>
              child.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (child.children && hasMatchingDescendants(child.children, searchTerm)),
          )

          if (hasMatchingChildren) {
            autoExpanded.add(option.id)
            expandParentsWithMatches(option.children)
          }
        }
      }
    }

    const hasMatchingDescendants = (options: NestedSelectOption[], searchTerm: string): boolean => {
      return options.some(
        (option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (option.children && hasMatchingDescendants(option.children, searchTerm)),
      )
    }

    expandParentsWithMatches(options)
    return new Set([...expandedItems, ...autoExpanded])
  }

  const handleToggleSelection = (optionId: string) => {
    const option = findOptionById(options, optionId)
    if (!option) return

    let newSelection = [...selectedValues]
    const isCurrentlySelected = isOptionChecked(option)

    if (isCurrentlySelected) {
      if (isLeafNode(option)) {
        // If it's a leaf node, just remove it
        newSelection = newSelection.filter((id) => id !== optionId)
      } else {
        // If it's a parent, remove it and all its children (leaf or all depending on mode)
        const childIds = leafNodesOnly ? getAllLeafChildIds(option) : getAllChildIds(option)
        newSelection = newSelection.filter((id) => {
          if (id === optionId) return false // Remove parent itself if not leafNodesOnly
          return !childIds.includes(id) // Remove all children
        })

        // Also remove the parent if it was selected (when not in leafNodesOnly mode)
        if (!leafNodesOnly) {
          newSelection = newSelection.filter((id) => id !== optionId)
        }
      }
    } else {
      // Select this item
      if (!leafNodesOnly || isLeafNode(option)) {
        newSelection.push(optionId)
      }

      // If this has children, select all children (or leaf children if leafNodesOnly)
      if (option.children) {
        const childIds = leafNodesOnly ? getAllLeafChildIds(option) : getAllChildIds(option)
        childIds.forEach((childId) => {
          if (!newSelection.includes(childId)) {
            const childOption = findOptionById(options, childId)
            if (childOption && (!leafNodesOnly || isLeafNode(childOption))) {
              newSelection.push(childId)
            }
          }
        })
      }
    }

    onSelectionChange(newSelection)
  }

  const handleRemoveSelection = (optionId: string) => {
    const newSelection = selectedValues.filter((id) => id !== optionId)
    onSelectionChange(newSelection)
  }

  const handleClearAll = () => {
    onSelectionChange([])
  }

  const toggleExpanded = (optionId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(optionId)) {
      newExpanded.delete(optionId)
    } else {
      newExpanded.add(optionId)
    }
    setExpandedItems(newExpanded)
  }

  const getSelectedCount = () => {
    if (leafNodesOnly) {
      return selectedValues.filter((id) => {
        const option = findOptionById(options, id)
        return option && isLeafNode(option)
      }).length
    }
    return selectedValues.length
  }

  const getDisplayText = () => {
    const count = getSelectedCount()
    if (count === 0) return placeholder
    if (count === 1) {
      const relevantSelections = leafNodesOnly
        ? selectedValues.filter((id) => {
            const option = findOptionById(options, id)
            return option && isLeafNode(option)
          })
        : selectedValues

      if (relevantSelections.length > 0) {
        const selectedOption = findOptionById(options, relevantSelections[0])
        return selectedOption?.label || placeholder
      }
    }
    return `${count} items selected`
  }

  const findOptionById = (options: NestedSelectOption[], id: string): NestedSelectOption | null => {
    for (const option of options) {
      if (option.id === id) return option
      if (option.children) {
        const found = findOptionById(option.children, id)
        if (found) return found
      }
    }
    return null
  }

  const isOptionChecked = (option: NestedSelectOption): boolean => {
    if (selectedValues.includes(option.id)) return true

    // If leafNodesOnly and this is not a leaf, check if all leaf children are selected
    if (leafNodesOnly && !isLeafNode(option)) {
      const leafChildIds = getAllLeafChildIds(option)
      return leafChildIds.length > 0 && leafChildIds.every((id) => selectedValues.includes(id))
    }

    return false
  }

  const renderOptions = (options: NestedSelectOption[], level = 0) => {
    const filteredOptions = filterOptions(options, searchTerm)
    const effectiveExpandedItems = getAutoExpandedItems(options, searchTerm)

    return filteredOptions.map((option) => {
      const isExpanded = effectiveExpandedItems.has(option.id)
      const hasChildren = option.children && option.children.length > 0
      const isChecked = isOptionChecked(option)

      return (
        <div key={option.id} className="w-full">
          <div
            className={cn("flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm", level > 0 && "ml-4")}
            style={{ paddingLeft: `${8 + level * 16}px` }}
          >
            <Checkbox
              checked={isChecked}
              onCheckedChange={() => handleToggleSelection(option.id)}
              className="shrink-0"
            />
            <span
              className="flex-1 select-none cursor-pointer hover:text-accent-foreground"
              onClick={() => hasChildren && toggleExpanded(option.id)}
            >
              {option.label}
            </span>
            {hasChildren && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-1 shrink-0"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleExpanded(option.id)
                }}
              >
                {isExpanded ? <ChevronDownIcon className="h-3 w-3" /> : <ChevronRightIcon className="h-3 w-3" />}
              </Button>
            )}
          </div>
          {hasChildren && isExpanded && <div className="mt-1">{renderOptions(option.children!, level + 1)}</div>}
        </div>
      )
    })
  }

  const getRelevantSelectedItems = () => {
    return selectedValues
      .map((id) => findOptionById(options, id))
      .filter((option): option is NestedSelectOption => {
        if (!option) return false
        return !leafNodesOnly || isLeafNode(option)
      })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-between text-left font-normal",
            !selectedValues.length && "text-muted-foreground",
            className,
          )}
        >
          <span className="truncate">{getDisplayText()}</span>
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="start" onCloseAutoFocus={(e) => e.preventDefault()}>
        <DropdownMenuLabel>
          Select Options {getSelectedCount() > 0 && `(${getSelectedCount()} selected)`}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="px-2 py-2">
          <div className="relative">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search options..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 h-9"
            />
          </div>
        </div>
        <DropdownMenuSeparator />

        {getRelevantSelectedItems().length > 0 && (
          <>
            <div className="px-2 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-medium text-muted-foreground">Selected Items:</div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
                  onClick={handleClearAll}
                >
                  Clear All
                </Button>
              </div>
              <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                {getRelevantSelectedItems().map((option) => (
                  <div
                    key={option.id}
                    className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                  >
                    <span>{option.label}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 w-3 h-3 hover:bg-primary/20"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveSelection(option.id)
                      }}
                    >
                      <XIcon className="h-2 w-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <DropdownMenuSeparator />
          </>
        )}

        <div className="max-h-64 overflow-y-auto">{renderOptions(options)}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
