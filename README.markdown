# **JavaScript Equality Comparison Table**

This project generates a dynamic comparison table to evaluate JavaScript expressions. It allows users to compare various values, including arrays, objects, booleans, numbers, and evaluated expressions (wrapped in backticks). The primary focus is on showcasing the results of equality comparisons (`==`, `===`) and conditional (`if`) evaluations in a visually clear, interactive manner.

You can view the demo [here](https://gunapalanivel.github.io/JavaScript-Equality-Table/).

For a more streamlined experience, check out the [unified version of the equality table](https://gunapalanivel.github.io/JavaScript-Equality-Table/unified/).

## **Table of Contents**

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Customization](#customization)
- [Technologies Used](#technologies-used)

## **Project Overview**

The Comparison Table Generator evaluates a set of values and displays the results of their comparisons in a tabular format. The tool supports complex expressions, including evaluated JavaScript values using backticks, enabling developers to visualize comparisons between different data types and structures in JavaScript.

It also handles specific cases like NaN comparisons, infinity values, and the differentiation between primitives, objects, and arrays.

### **Use Cases**

- Testing JavaScript comparison operations in a clear, visual format.
- Learning how different data types are treated in JavaScript comparisons.
- Understanding JavaScript's `==` vs. `===` behavior.
- Debugging and experimenting with evaluated expressions in JavaScript.

## **Features**

- **Dynamic Comparison Table**: Displays the results of value comparisons (`==`, `===`) in a table format.
- **Supports JavaScript Evaluation**: Strings wrapped in backticks (`) are evaluated as JavaScript code.
- **Semantic HTML5**: Uses semantic HTML for better accessibility and content separation.
- **Optimized for Modern Browsers**: Fully responsive and optimized for both desktop and mobile browsers.
- **Canvas-Based Text Rotation**: Rotates text using HTML5 Canvas for header elements, ensuring better layout and readability.
- **Fast Performance**: Uses modern JavaScript practices (e.g., scoped variables, efficient checks) for quick and reliable performance.

### **Dependencies**

This project uses jQuery and jQuery UI from the official CDN. No additional installation is required.

## **Usage**

You can either open the `index.html` file directly in a browser or integrate it into any existing HTML page.

1. **Comparing Values**: By default, the project compares a set of predefined values. The table will show whether each pair of values is equal (`==`, `===`) and whether a conditional statement (`if`) would execute.
2. **Reordered Comparisons**: By adding `?reordered` to the URL, the project compares a different set of values.

3. **Rotated Headers**: The headers of the table are rotated for better visual alignment. Canvas is used to ensure the text rotates properly, even on browsers without CSS3 transforms.

### **Generating a Table**

To generate a comparison table, the following functions are used:

- `buildComparisonTable(values, comparator)` – Generates a table comparing values based on the given comparator (e.g., `===` or `==`).
- `buildComparisonTableForIf(values)` – Generates a table to visualize the result of an `if` condition for each value.

## **Code Structure**

- **HTML5 Compliant**: The project uses HTML5 structure (`nav`, `section`, `article`) for better organization.
- **CSS Styling**: Minimal styling is included for table formatting. You can add custom styles as needed.
- **JavaScript**: The core logic is written in JavaScript (ES6+), with jQuery for DOM manipulation. The code is structured as follows:
  - Values are processed into a comparison-friendly format.
  - Comparisons are evaluated, and the results are displayed in the table.

### **Key Functions**

- **`ForComparison`**: A class that processes and formats the values to make them suitable for comparison.
- **`testResults(fc2, comparator)`**: Compares two values and returns the result of the comparison.
- **`rotateText(txt, cHeight)`**: A helper function to rotate text in the table headers using HTML5 Canvas.

## **Customization**

- **Changing Comparison Operators**: The default operator used is `===`. You can modify this by passing a different operator to `buildComparisonTable` (e.g., `==`, `!=`).
- **Adding More Values**: You can extend the `values` array to add more test cases, including complex expressions.
- **Styling**: Modify the CSS to style the table differently, for example, adding hover effects or changing the table layout.

## **Technologies Used**

- **HTML5**: Semantic structure for better content separation and SEO.
- **JavaScript (ES6+)**: Core logic and comparison functionality.
- **jQuery (3.6.0)**: DOM manipulation and event handling.
- **jQuery UI (1.12.1)**: Used for UI components like the table.
- **HTML5 Canvas**: For rendering rotated text in table headers.
