# Deadlock early-game research design

Updated 9 November 2026. The **3-, 9-, and 15-minute cutoffs are proposed pending instructor approval**. The pilot measured data coverage. Model evaluation is pending.

Formal title: Early-Game Match Outcome Prediction in Deadlock: A Comparative Study of Machine Learning Models at Different Match Stages

## Question

Compare final winning-team prediction at minutes 3, 9 and 15. At all three stages, compare team-only features with a set that adds individual soul totals, team shares and within-team spread. At minutes 9 and 15, also test the added contribution of soul growth by comparing the extended feature set with and without growth on the same matches. At minute 3, the observed feed has no earlier snapshot for measuring growth.

## Pilot evidence for the proposed cutoffs

The community Deadlock API pilot inspected 50 completed matches and retained 45 for the common cohort. Five ended before minute 15. The 135 historical pilot rows used the original cutoffs shown below. All 45 retained matches used the same observed time at each cutoff.

| Original pilot cutoff | Observed snapshot | Lag |
| --- | --- | ---: |
| 5 minutes | 3:00 | 120 seconds |
| 10 minutes | 9:00 | 60 seconds |
| 15 minutes | 15:00 | 0 seconds |

The proposed cutoffs match those observed times. Growth was measurable using earlier snapshots at 9:00 and 15:00. The first observation was at 3:00. This pilot establishes coverage for the sampled matches. Verify coverage again before collecting the full cohort.

## Planned data

Community Deadlock API and public Parquet data lake. The 50-match API pilot verified timestamped player statistics, winner labels and snapshot coverage for the sample. Plan for at least 500 eligible matches, targeting 5,000–10,000 if accessible. The final CSV and eligible count are pending.

One analysis row represents one completed match at one stage. The intended common cohort contains standard human-versus-human matches lasting beyond minute 15. Disclose exclusions and the resulting limits on generalization.

## Timing and leakage controls

- Target 180, 540 and 900 elapsed seconds. Use the latest valid observed sample at or before each cutoff and record actual time and lag. Set acceptable lag before evaluating the full study.
- Compute growth at 9 and 15 minutes using actual observed intervals. Omit growth from the 3-minute predictor lists for this feed.
- Do not fill earlier snapshots with later observations.
- Exclude final totals, match duration, later events and account IDs from predictors.
- Keep all stages of a match in the same chronological split.
- Fit preprocessing and tune hyperparameters using training data only.

## Planned comparison

Logistic Regression and Random Forest; XGBoost is conditional in the proposal. The course requires at least three algorithms by M3, so the team must confirm XGBoost or another third classifier. Compare with majority-class and soul-lead baselines, defining tie handling before evaluation.

Use the same cohort and split for team-only versus team-plus-player-soul features and the three cutoffs. Compare accuracy, F1-score, ROC-AUC, calibration and confusion matrices. Define repetition/time-window procedures before reporting mean plus/minus standard deviation; no measured results have been provided.

## Pending deliverables

Instructor decision on the proposed cutoffs, full dataset and dictionary, reproducible full-study code, measured model results and charts, final paper PDF, and slides. The pilot and its cleaning outputs are complete.
