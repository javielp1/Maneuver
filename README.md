# MANEUVER — COMP 306 Sprint 1 prototype

This is a **new standalone Expo starter**, designed from `Maneuver.pdf` (ER diagram). It does NOT modify your existing MANEUVER source folder.

## Run

1. Unzip the project and open `maneuver-sprint1` in VS Code.
2. Run `npm install` (requires internet), then `npx expo start`.
3. Open in Expo Go. Use `npx expo start --tunnel` if local Wi-Fi communication fails.
4. If dependency resolution fails with SDK updates, use `npx expo install --fix`, then `npx expo-doctor`.

## What is implemented

- Four tabs: **Home**, **Trainers**, **Booking**, **Events**.
- Home shows trainer-authored public posts (`POST` -> `TRAINER_PROFILE` -> `USER`).
- Trainers list and profile show offered services and private groups.
- Booking tab lists sample services and prices (`SERVICE`) with an account-required demo action.
- Events list and detail read from `EVENT`.
- Private group previews read from `PRIVATE_GROUP`; membership example data is in `GROUP_MEMBERSHIP`.
- A guest can browse. Restricted actions prompt signup the first time; subsequent taps show a small dismissible reminder instead of the same modal repeatedly.

## How the ER diagram appears in the code

`src/data/model.ts` contains **all eight entities** and sample data: `USER`, `TRAINER_PROFILE`, `POST`, `SERVICE`, `BOOKING`, `EVENT`, `PRIVATE_GROUP`, `GROUP_MEMBERSHIP`. The IDs and lookup functions demonstrate foreign-key relationships. **Booking and membership sample records exist only as examples; the UI intentionally does not expose private client bookings or approved private group content to guests.**

No real database, account, authentication, intake questionnaire, trainer admin panel, payments, or booking availability is implemented. `password_hash` is a non-security demonstration field, not a usable credential. Don't put real passwords or client data in sample files.

## Sprint 1 requirements and tests (lead: student developer)

| ID | Requirement | Test |
| --- | --- | --- |
| R1 | Four bottom tabs with named icons | Tap each tab; confirm title and correct content |
| R2 | Community feed with two trainer posts | Launch; verify two trainer names and post text |
| R3 | Trainer directory -> profile -> back | Tap View Profile; check services and groups; use Back |
| R4 | Guest action -> account prompt, dismissible | Tap Like; dismiss modal; tap Like again to see small reminder |

## Files to study in order

1. `src/data/model.ts`: objects, arrays, foreign keys and `find`.
2. `src/app/(tabs)/index.tsx`: components, `map`, JSX, touch events.
3. `src/app/(tabs)/_layout.tsx`: file-based tab navigation.
4. `src/app/trainer/[id].tsx`: dynamic routes, route parameters, `filter`.
5. `src/context/GuestContext.tsx`: shared React state and conditional rendering.

## Integration with your existing project

**Do not overwrite the existing MANEUVER project.** First verify the starter runs. Then move individual screens/components into your existing `src/app` project, adjusting imports and routing as necessary. If you upload your actual project files, they can be integrated more safely.
