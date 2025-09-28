"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Removed tabs import; using section navigation instead
import { useSession } from "@/lib/SessionContext";
import { updateUser, deleteUser, Wilaya } from "@/lib/actions";
import { NestedSelect } from "@/components/nested-select";

import wilayas from "@/app/muni.json"
import { forEach } from "lodash";

function pair(a: number, b: number): number {
  return a >= b ? a * a + a + b : b * b + a;
}

function unpair(z: number): [number, number] {
  const sqrtz = Math.floor(Math.sqrt(z));
  const sqz = sqrtz * sqrtz;

  if (z - sqz < sqrtz) {
    return [z - sqz, sqrtz];
  } else {
    return [sqrtz, z - sqz - sqrtz];
  }
}

const optionsData = wilayas.map((v,i) => {
  return {id: String(v.id), label: `${v.name_ln} - ${v.name_ar}`, children: v.dairas.map((d,j) => {
    return {id: `${v.id}.${j}`, label: `${d.name_ln} - ${d.name_ar}`, children: d.baladiyas.map(b => {
      return {id: `${v.id}.${j}.${b.baladiya_id}`, label: `${b.name_ln} - ${b.name_ar}`}
    })}
  })}
})

export default function SettingsPage() {
  const { session, refreshSession } = useSession();
  const [username, setUsername] = useState(session?.Username ?? "");
  const [email, setEmail] = useState(session?.Email ?? "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [workarea, setWorkarea] = useState<Wilaya[]>([]);
  const [workareaids, setWorkareaids] = useState<string[]>([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    
   console.log(workarea)
   let workareaarray :Wilaya[] = new Array()
   workareaids.forEach(id => {
    const [w, d, b] = id.split(".", 3)
    console.log(w, d, b)
    let wilaya = workareaarray.find(v => String(v.id) == w)
    if (!wilaya) {
      console.log("no w")
      const basewilaya = wilayas.find((v => String(v.id) == w))
      if (!basewilaya) {
        console.error("this shouldnt happen")
        return
      }
      wilaya = {...basewilaya, dairas: []}
      workareaarray.push(wilaya)
    }
    let widx = parseInt(w) - 1 // wilaya id = index + 1, sorted by id, hoping they stay that way
    let didx = parseInt(d)
    let daira = wilaya.dairas.find(da => da.name_ln == wilayas[widx].dairas[didx].name_ln && da.name_ar == wilayas[widx].dairas[didx].name_ar)
    if (!daira) {
      const basedaira = wilayas[widx].dairas[didx]
      daira = {...basedaira, baladiyas: []}
      wilaya.dairas.push(daira)
    }
    let baladiya = daira.baladiyas.find(ba => String(ba.baladiya_id) == b)
    if (!baladiya) { 
      baladiya = wilayas[widx].dairas[didx].baladiyas.find( ba => String(ba.baladiya_id) == b)
      if (!baladiya) {
        console.error("shouldnt happen @useffect in settings/page")
        return
      }
      daira.baladiyas.push(baladiya)
    }

   });

   setWorkarea(workareaarray)
   console.log(workareaarray)
    return () => {
      
    }
  }, [workareaids])
  
  
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    // Password change validation
    if ((newPassword || confirmPassword || oldPassword) && newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      await updateUser({ username, email, oldPassword, newPassword, workarea });
      setSuccess("Profile updated successfully.");
      await refreshSession();
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setError(err.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete your account? This action cannot be undone.")) return;
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await deleteUser();
      setSuccess("Account deleted. You will be logged out.");
      // Optionally redirect or clear session
    } catch (err: any) {
      setError(err.message || "Failed to delete account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow-lg border min-h-[500px]">
      {/* Side Nav */}
      <nav className="w-56 border-r p-6 flex flex-col gap-2 bg-gray-50 rounded-l-xl sticky top-10 h-fit">
        <h2 className="text-lg font-semibold mb-4 text-blue-700">Settings</h2>
        <ul className="flex flex-col gap-2 text-sm">
          <li><a href="#region" className="hover:text-blue-700 transition-colors">Region</a></li>
          <li><a href="#account" className="hover:text-blue-700 transition-colors">Account Info</a></li>
          <li><a href="#password" className="hover:text-blue-700 transition-colors">Password</a></li>
          <li><a href="#delete" className="hover:text-red-600 transition-colors">Delete Account</a></li>
          <li><a href="#app" className="hover:text-blue-700 transition-colors">App Settings</a></li>
        </ul>
      </nav>
      {/* Main Content */}
      <div className="flex-1 p-8 space-y-12">
        <section id="region" className="mb-12">
          <div className="bg-gray-50 rounded-lg shadow p-6 border border-blue-100">
            <h1 className="text-xl font-bold mb-4 text-blue-700">Region</h1>
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                <NestedSelect onSelectionChange={setWorkareaids} options={optionsData} selectedValues={workareaids} leafNodesOnly placeholder="Set work area">

                </NestedSelect>
                </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {success && <div className="text-green-600 text-sm">{success}</div>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </div>
        </section>
        <section id="account" className="mb-12">
          <div className="bg-gray-50 rounded-lg shadow p-6 border border-blue-100">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Account Info</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <Input value={username} onChange={e => setUsername(e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
            </div>
          </div>
        </section>
        <section id="password" className="mb-12">
          <div className="bg-gray-50 rounded-lg shadow p-6 border border-blue-100">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Change Password</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
                <Input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} placeholder="Enter your current password" autoComplete="current-password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Enter new password" autoComplete="new-password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <Input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Re-enter new password" autoComplete="new-password" />
              </div>
            </div>
          </div>
        </section>
        <section id="delete" className="mb-12">
          <div className="bg-red-50 rounded-lg shadow p-6 border border-red-200">
            <h2 className="text-xl font-bold mb-4 text-red-600">Delete Account</h2>
            <div className="flex flex-col items-start gap-2">
              <Button variant="destructive" onClick={handleDelete} disabled={loading}>
                Delete Account
              </Button>
              <span className="text-xs text-gray-400 mt-2">This action cannot be undone.</span>
            </div>
          </div>
        </section>
        <section id="app" className="mb-12">
          <div className="bg-gray-50 rounded-lg shadow p-6 border border-blue-100">
            <h2 className="text-xl font-bold mb-4 text-blue-700">App Settings</h2>
            <div className="text-gray-500">App-specific settings will go here.</div>
          </div>
        </section>
      </div>
    </div>
  );
}