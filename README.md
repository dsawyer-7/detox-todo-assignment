# Detox Take-Home Assignment - QA Engineer (US App)

## App Chosen & Why
I created a new React Native project using the official template. This gave me full control to implement testIDs and focus on testing strategy and Detox setup.

## Testing Strategy
I prioritized the foundational flows that are critical for any mobile application:
- App launch stability
- UI element visibility
- Basic user input and interaction

I chose 5 focused tests to ensure quality and reliability rather than breadth, which aligns with real-world QA prioritization under time constraints.

## Test Cases

| Test ID | Description                              | Type     | Rationale |
|---------|------------------------------------------|----------|---------|
| TC001   | App launches successfully                | Positive | Foundation of all testing |
| TC002   | Welcome text is visible                  | Positive | Verifies correct rendering |
| TC003   | User can type into input field           | Positive | Basic data entry |
| TC004   | Add button is visible                    | Positive | Primary action |
| TC005   | Task list area exists                    | Positive | Main content area |

## Implementation Notes
- Followed official Detox setup.
- Added `testID` props to key components in `App.tsx` for stable element selection.
- Used `by.id()` matchers.

## Challenges & Solutions
- **Challenge**: Environment setup (Gradle / JVM version compatibility on the available machine).  
  **Solution**: Created a clean project and configured Detox as per official docs. Noted that full build requires JVM 17+.

- **Challenge**: Element selection.  
  **Solution**: Added explicit testIDs.

## How to Run the Tests
1. `npm install`
2. `npm run detox:build` (requires JVM 17+)
3. `npm run detox:test`

**Note**: Due to environment constraints (JVM version), the full build could not be completed on the available machine. The test structure and configuration are ready for a compatible environment.
