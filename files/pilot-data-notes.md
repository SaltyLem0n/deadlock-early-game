# Deadlock pilot data notes

The public CSV contains 135 cleaned rows from 45 completed matches. The pilot inspected 50 matches and excluded five that ended before 15 minutes. These data come from the [community Deadlock API](https://api.deadlock-api.com/docs).

The CSV uses its original prediction cutoffs of 5, 10, and 15 minutes. The API snapshots used at those cutoffs were 3:00, 9:00, and 15:00. The proposed 3-, 9-, and 15-minute design is pending instructor approval.

| Column or pattern | Meaning |
| --- | --- |
| `pilot_match_key` | Public label assigned to one match. Each label appears in three rows and has no meaning outside this export. |
| `original_cutoff_seconds` | Original prediction cutoff in seconds after the start of the match. |
| `snapshot_seconds` | Elapsed match time of the observation used for every player in the row. |
| `lag_seconds` | Original cutoff minus the snapshot time, in seconds. |
| `match_mode` | Ranked or unranked standard matchmaking. |
| `team_a_win` | Final outcome. `1` means Team A won and `0` means Team B won. Team A is source side `Team0` and Team B is source side `Team1`. |
| `team_a_*`, `team_b_*` totals | Sum of each team's six player values at the selected snapshot. Souls are the API's `net_worth` measure. Kills, deaths, and assists are counts. |
| `*_difference` | Team A's total minus Team B's total. |
| `team_*_soul_spread` | Highest minus lowest player souls on a team at the snapshot. |
| `team_*_rank_*_souls` | Player souls at the snapshot. Rank 1 has the most souls on that team at that time. Ties use source player slot. The ranks are recalculated at each snapshot. |
| `team_*_rank_*_soul_share` | Player souls divided by the team total. The ratio is between 0 and 1. |
| `team_*_rank_*_soul_growth_per_minute` | Change in the same player's recorded souls divided by the observed elapsed minutes. Blank means an earlier observation was unavailable. All growth fields at the first snapshot are blank. |

The public export omits source match IDs, player and account identifiers, start timestamps, and provisional split assignments. Keep all three rows with the same pilot match key together when inspecting matches. This sample documents data coverage and feature preparation. Full-study collection and model evaluation are pending.
