# Deadlock early-game research design

Updated 27 October 2026. This is a summary of the supplied proposal, not a report of completed experiments.

Formal title: Early-Game Match Outcome Prediction in Deadlock: A Comparative Study of Machine Learning Models at Different Match Stages

## Question

Compare final winning-team prediction at minutes 5, 10 and 15. Test the added predictive contribution of individual player soul progression, team shares and within-team spread beyond team-only features.

## Planned data

Community Deadlock API and public Parquet data lake. First inspect 20-50 completed records for timestamped player statistics, labels, missingness and cutoff coverage. Plan for at least 500 eligible matches, targeting 5,000-10,000 if accessible. The final CSV and sample count remain unverified.

One analysis row represents one completed match at one stage. The intended common cohort contains standard human-versus-human matches lasting beyond minute 15. Disclose exclusions and the resulting limits on generalization.

## Timing and leakage controls

- Use the latest observed sample at or before each cutoff; record actual time and lag.
- Compute growth using actual observed time intervals.
- Do not fill earlier snapshots with later observations.
- Exclude final totals, match duration, later events and account IDs from predictors.
- Keep all stages of a match in the same chronological split.
- Fit preprocessing and tune hyperparameters using training data only.

## Planned comparison

Logistic Regression and Random Forest; XGBoost is conditional in the proposal. The course requires at least three algorithms by M3, so the team must confirm XGBoost or another third classifier. Compare with majority-class and soul-lead baselines, defining tie handling before evaluation.

Use the same cohort and split for team-only versus team-plus-player-soul features and the three cutoffs. Compare accuracy, F1-score, ROC-AUC, calibration and confusion matrices. Define repetition/time-window procedures before reporting mean plus/minus standard deviation; no measured results have been provided.

## Pending deliverables

Verified dataset and dictionary; reproducible research code; measured results and charts; final paper PDF; slides. The downloadable DOCX is the proposal, not the final paper.
