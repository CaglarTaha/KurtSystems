import { NextResponse } from "next/server";

type StatsData = {
  sessions: number; // total training sessions
  injuryReductionPercent: number; // injury reduction percentage
  teams: number; // number of teams/farms
  sensorDataMillions: number; // sensor data in millions
};

export async function GET() {
  const parse = (value: string | undefined, fallback: number) => {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  };

  const data: StatsData = {
    sessions: parse(process.env.KS_STAT_SESSIONS, 1200),
    injuryReductionPercent: parse(process.env.KS_STAT_INJURY_PERCENT, 30),
    teams: parse(process.env.KS_STAT_TEAMS, 15),
    sensorDataMillions: parse(process.env.KS_STAT_SENSOR_MILLIONS, 5),
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}


