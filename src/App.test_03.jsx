import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);

  const headingElement = screen.getByText(/learn react/i);

  expect(headingElement).toBeInTheDocument();
});

/**
 * TDD : 테스트 주도 개발
 * - TDD는 테스트를 먼저 작성하고, 그 테스트를 통과하는 코드를 작성하는 개발 방법이다. 보통 레드 그린 테스트라고 한다.
 * - 코드 작성 전에 테스트에 실패하는 레드 테스트를 먼저 실행한다.
 * - 코드 작성 후에는 통과하는 테스트로 그린 테스트를 확인한다.
 *
 * TDD 작성 방법
 * - 빈 함수를 작성한다.
 * - 테스트를 작성한다.
 * - 테스트를 실행하여 실패하는 것을 확인한다.
 * - 코드를 작성하여 테스트를 통과한다.
 *
 * TDD 사용 이유
 * - 테스트를 작성하는 것이 프로세스의 한 부분으로 느끼게 된다.
 * - 효율적이다.
 * - 코드 작성 전에 테스트를 작성하면 변경 후에 자동으로 다시 실행할 수 있다. 변경 사항이 생길 때마다 모든 테스트를 다시 실행함.
 */
