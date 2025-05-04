<img src="https://img.icons8.com/?size=96&id=wpZmKzk11AzJ&format=png" width="50px" />

## 1-1 Introduction to typescript

### what is TypeScript ?

### Lackings of JavaScript

- Dynamic Type checking issues
- Don't Support OOP
- Hard to find bugs if Project is Large
- Catch errors only on Run Time
- Versions are Different , Hard to convert

### Can Browser Recognize Ts Code ??

- No . Ts Convert to JS

### Advantages of TypeScript

- Type Safety
- TS have All the type of JS
- Ts have is own data types also
- Less Bugs & Less Testing
- Increase readabilities & Productivity

### DisAdvantages

- Make type definition complex
- Manual Migration demands hard effort
- Limited Library Support
- Over Engineering happens

## 2. Install TypeScript & Handle Node Version

- Install Node JS
- Handle Node JS version using NVM
- Handle Node js version using fnm
- Install TypeScript Globally with

```bash
npm i -g typeScript
```

### 1-3 Write your first typescript program

```bash
tsc --init #create Ts Config
# rootDir -> Define Root Difrectory
# outDir -> Define Outer Directory for transpile
# target -> Decide in which version , code converted into js
```

```bash
tsc # Convert typescripts in JS
```

### 1-4 Data Type in TypeScript

#### Primitive Data Types

- **string**: Represents textual data.
  ```typescript
  let name: string = "John";
  ```
- **number**: Represents numeric values.
  ```typescript
  let age: number = 25;
  ```
- **boolean**: Represents true/false values.
  ```typescript
  let isStudent: boolean = true;
  ```
- **null**: Represents a null value.
  ```typescript
  let emptyValue: null = null;
  ```
- **undefined**: Represents an undefined value.
  ```typescript
  let notAssigned: undefined = undefined;
  ```

#### Special Data Types

- **any**: Can hold any type of value.
  ```typescript
  let randomValue: any = "Hello";
  randomValue = 42;
  ```
- **unknown**: Similar to `any` but safer.
  ```typescript
  let uncertainValue: unknown = "Hello";
  ```
- **void**: Used for functions that do not return a value.
  ```typescript
  function logMessage(): void {
    console.log("This is a message");
  }
  ```
- **never**: Represents values that never occur.
  ```typescript
  function throwError(message: string): never {
    throw new Error(message);
  }
  ```

#### Complex Data Types

- **array**: Represents a collection of values.
  ```typescript
  let numbers: number[] = [1, 2, 3];
  ```
- **tuple**: Represents an array with fixed types and length.
  ```typescript
  let person: [string, number] = ["Alice", 30];
  ```

#### Concept of Type Assertion

