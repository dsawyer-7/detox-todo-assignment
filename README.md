# Detox Take-Home Assignment

## App Chosen & Why
I created a new React Native project using the official template (`npx react-native init`).  
I chose this because it is publicly available, clean, and gave me full control to add proper `testID`s for reliable testing. This allowed me to focus on demonstrating testing strategy and Detox implementation within the recommended 3-hour limit.

## Testing Strategy
I prioritized the most critical and high-risk user flows that exist in nearly every mobile application:
- Successful app launch
- UI element visibility and rendering
- Basic user interactions (text input and button taps)

I deliberately kept the scope to 5 focused tests to ensure they were reliable and well-structured, rather than attempting many shallow tests. This approach reflects how I would prioritize testing in real projects — focusing on impact and stability first.

## Test Cases

| Test ID | Description                              | Type     | Rationale |
|---------|------------------------------------------|----------|---------|
| TC001   | App launches successfully                | Positive | Most fundamental check |
| TC002   | Welcome text is displayed correctly      | Positive | Verifies initial rendering |
| TC003   | User can type into the task input field  | Positive | Core data entry flow |
| TC004   | Add button is visible and functional     | Positive | Primary action element |
| TC005   | Task list area is present                | Positive | Main content visibility |

## Implementation Notes
- Followed the official Detox documentation for setup.
- Added explicit `testID` props to key components for stable element selection.
- Used `by.id()` matchers for reliability.
- Tests are organized with clear `describe` and `it` blocks for readability and maintainability.

## Challenges & Solutions
- **Challenge**: Environment setup (JVM version compatibility).  
  **Solution**: Created a clean project and configured Detox following the official guide step-by-step.

- **Challenge**: Making UI elements reliably selectable.  
  **Solution**: Added explicit `testID` props in `App.tsx` and used `by.id()` selectors.

## Future Improvements
If I had more time, I would:
- Add more negative and edge case tests (empty input validation, error states, etc.)
- Implement Page Object Model pattern for better maintainability
- Add assertions for success states after adding tasks
- Include visual regression or snapshot testing
- Set up CI integration with GitHub Actions

## How to Run the Tests
**Note**: Due to environment constraints (JVM 17 requirement), I was unable to complete the full `detox build` on the available machine. The test structure, configuration, and code are ready and should work on a standard development environment with JVM 17+.
1. `npm install`
2. `npm run detox:build` (requires JVM 17+)
3. `npm run detox:test`
