# Detox Take-Home Assignment - QA Engineer (US App)

## App Chosen & Why
I created a new React Native project using the official template. I chose this because it is publicly available, clean, and gave me full control to add proper testIDs and demonstrate a realistic testing approach within the recommended 3-hour limit.

## Testing Strategy
I focused on the most critical user flows that are foundational to any mobile app:
- Successful app launch
- UI element visibility
- Basic user interactions (text input and button taps)

I kept the scope to 5 focused tests to ensure they were reliable and well-structured rather than rushing many shallow tests.

## Test Cases

| Test ID | Description                              | Type     | Rationale |
|---------|------------------------------------------|----------|---------|
| TC001   | App launches successfully                | Positive | Most fundamental check |
| TC002   | Welcome text is displayed correctly      | Positive | Verifies initial rendering |
| TC003   | User can input text into the task field  | Positive | Core data entry flow |
| TC004   | Add button is visible and functional     | Positive | Primary action element |
| TC005   | Task list area is present                | Positive | Main content visibility |

## Implementation Notes
- Used Detox following the official documentation.
- Added `testID` props to key components for stable element selection.
- Used `by.id()` matchers for reliability.
- Tests are organized with clear `describe` and `it` blocks for readability.

## Challenges & Solutions
- **Challenge**: Setting up Detox environment from scratch.  
  **Solution**: Followed the official guide step-by-step and used a fresh React Native project.

- **Challenge**: Making elements reliably selectable.  
  **Solution**: Added explicit `testID` props in `App.tsx`.

## How to Run the Tests

1. Install dependencies:
   ```bash
   npm install
2. Build the app for Detox:
   ```bash
   npm run detox:build
3. Run the tests:
   ```bash
   npm run detox:test
