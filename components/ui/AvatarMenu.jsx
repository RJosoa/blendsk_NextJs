"use client";

import React, { useState } from "react";
import UserButton from "./buttons/UserButton";

export default function AvatarMenu() {
  const [showUsername, setShowUsername] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowUsername(true)}
      onMouseLeave={() => setShowUsername(false)}
    
    >
      <UserButton showUsername={showUsername} />
    </div>
  );
}
