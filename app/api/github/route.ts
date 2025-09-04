import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username") || "HalimMahmoud";
    const sort = searchParams.get("sort") || "updated";
    const per_page = searchParams.get("per_page") || "30";

    const url = `https://api.github.com/users/${username}/repos?sort=${sort}&per_page=${per_page}`;
    const res = await fetch(url, {
      headers: {
        "Accept": "application/vnd.github+json"
      },
      cache: "no-store"
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "unknown error" }, { status: 500 });
  }
}
