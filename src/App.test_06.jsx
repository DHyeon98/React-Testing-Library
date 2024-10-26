import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);

  const headingElement = screen.getByText(/learn react/i);

  expect(headingElement).toBeInTheDocument();
});

/**
 * TDD와 BDD의 차이
 * - BDD란 행위 주도 개발(Behavior Driven Development)로,
 * 애플리케이션이 어떻게 동작해야 하는지에 대한 시나리오를 작성하고,
 * 이를 기반으로 테스트 케이스를 작성하는 방법론입니다.
 *
 * TDD는 테스트 주도 개발(Test Driven Development)로,
 * 테스트 케이스를 먼저 작성하고, 이를 통과하는 코드를 작성하는 방법론입니다.
 *
 * BDD는 시나리오 기반으로 테스트를 작성하기 때문에 비즈니스 요구사항과
 * 개발자 간의 커뮤니케이션에 유리하며,
 * TDD는 테스트 케이스를 먼저 작성하기 때문에 코드의 품질을 보장하는 데 유리합니다.
 *
 * - 다양한 역할 간의 협업이 필요하지만 이 강의는 모두 개발자이며 다른 그룹이 없다. 그래서 TDD를 사용한다.
 */
