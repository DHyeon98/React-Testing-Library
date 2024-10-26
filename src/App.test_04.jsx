import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);

  const headingElement = screen.getByText(/learn react/i);

  expect(headingElement).toBeInTheDocument();
});

/**
 * RTL 철학
 * 1. RTL의 역할이란 무엇이고 왜 사용할까
 * - 가상 DOM을 제공하고, DOM 조작을 위한 유틸리티를 제공한다.
 * - 브라우저 없이 테스트 가능하다.
 *
 * 테스트 유형
 * 1. 유닛 테스트
 * - 함수나 컴포넌트를 분리해서 테스트하는 것
 *
 * 2. 통합 테스트
 * - 여러 유닛이 함께 작동하는 방식을 테스트하여 유닛 간의 상호 작용을 테스트함.
 * - 예시로 컴포넌트 간의 상호작용을 테스트하거나 마이크로 서비스 간의 상호작용을 테스트한다.
 *
 * 3. 기능 테스트
 * - 소프트웨어의 특정 기능을 테스트하는 것 (함수 코드를 말하는게 아닌 일반적인 동작을 말함.)
 * - 예시로 데이터를 폼에 입력하고 제출을 클릭하면 데이터가 저장되는지 테스트한다.
 * - 코드가 아닌 동작을 테스트함
 *
 * 4. 인수 테스트 or End to End 테스트 or E2E 테스트
 * - 실제 브라우저가 필요, 앱이 연결된 서버 필요, 도구 필요
 * - RTL을 위한 테스트는 아님
 */
