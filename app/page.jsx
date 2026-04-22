"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [html, setHtml] = useState("");

  async function generate() {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, desc })
    });

    const data = await res.json();
    setHtml(data.html);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Landing SaaS 🚀</h1>

      <input placeholder="Product Name" onChange={e => setName(e.target.value)} />
      <br />
      <textarea placeholder="Description" onChange={e => setDesc(e.target.value)} />
      <br />

      <button onClick={generate}>Generate</button>

      <hr />

      <iframe style={{ width: "100%", height: "600px" }} srcDoc={html} />
    </div>
  );
}
