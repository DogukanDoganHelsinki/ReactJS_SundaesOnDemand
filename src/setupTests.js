// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mocks/server";

// API mocking butun testlerden once kur

beforeAll(() => server.listen());

// request handlerlari resetle ki birbirlerini etkilemesinler

afterEach(() => server.resetHandlers());

// testler bitince temizle

afterAll(() => server.close());
