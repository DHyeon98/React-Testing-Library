import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);

  const headingElement = screen.getByText(/learn react/i);

  expect(headingElement).toBeInTheDocument();
});

/**
 * 1. 유닛 테스트
 * - 테스트를 최대한 격리시킴. 함수나 컴포넌트를 테스트할 때 의존성을 표시함
 * - 격리된 유닛에서 실패를 쉽고 정확하게 파악이 가능함
 * - 사용자가 소프트웨어와 상호 작용하는 방식과는 거리가 멀다.
 *
 * 2. 기능 테스트
 * - 사용자 관점에서 시스템을 테스트함. 사용자가 시스템과 상호 작용하는 방식을 테스트함
 * - 테스트에 통과하면 사용자에게 문제가 없고, 테스트에 실패하면 사용자에게 문제 발생할 가능성이 높음
 * - 실패한 테스트를 디버깅하기 어려움
 * - 어떤 부분의 코드가 테스트 실패의 원인인지 정확히 알 수 없음
 * - 기능 테스트의 장점이 단점을 보완함
 */
