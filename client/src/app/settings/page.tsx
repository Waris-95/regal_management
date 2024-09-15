"use client";

import { useState } from "react";
import Header from "@/app/(components)/Header";

type UserSetting = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockSettings: UserSetting[] = [
  { label: "Username", value: "dully", type: "text" },
  { label: "Email", value: "dully@gmail.com", type: "text" },
  { label: "Notification", value: true, type: "toggle" },
  { label: "Dark Mode", value: false, type: "toggle" },
  { label: "Language", value: "English", type: "text" },
];

const Settings = () => {
  const [userSettings, setUserSettings] = useState<UserSetting[]>(mockSettings);

  const handleToggleChange = (index: number) => {
    const updatedSettings = userSettings.map((setting, idx) =>
      idx === index ? { ...setting, value: !setting.value } : setting
    );
    setUserSettings(updatedSettings);
  };

  const handleInputChange = (index: number, newValue: string) => {
    const updatedSettings = userSettings.map((setting, idx) =>
      idx === index ? { ...setting, value: newValue } : setting
    );
    setUserSettings(updatedSettings);
  };

  return (
    <div className="container mx-auto p-6">
      <Header name="User Settings" />
      <div className="overflow-hidden rounded-lg shadow-lg mt-6">
        <table className="min-w-full bg-gray-800 rounded-lg border-collapse">
          <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <tr>
              <th className="text-left py-4 px-6 font-bold uppercase text-sm tracking-wider">
                Setting
              </th>
              <th className="text-left py-4 px-6 font-bold uppercase text-sm tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {userSettings.map((setting, index) => (
              <tr className="hover:bg-gray-700 transition duration-150 ease-in-out" key={setting.label}>
                <td className="py-4 px-6 font-medium text-gray-200">{setting.label}</td>
                <td className="py-4 px-6">
                  {setting.type === "toggle" ? (
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={setting.value as boolean}
                        onChange={() => handleToggleChange(index)}
                      />
                      <div
                        className="w-11 h-6 bg-gray-600 rounded-full relative shadow-inner transition-all
                        peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-indigo-400
                        peer-checked:bg-indigo-500"
                      >
                        <span
                          className={`${
                            setting.value ? "translate-x-5 bg-white" : "translate-x-0 bg-gray-500"
                          } inline-block w-5 h-5 rounded-full shadow transform transition-transform duration-300 ease-in-out`}
                        />
                      </div>
                    </label>
                  ) : (
                    <input
                      type="text"
                      className="block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-gray-200"
                      value={setting.value as string}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
