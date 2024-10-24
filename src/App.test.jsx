import { render, screen } from "@testing-library/react";
import App from "./App";

// 1. 리액트 테스팅 라이브러리의 역할
// - 테스트하려는 경우 시뮬레이션된 DOM을 제공
// - 테스트에서 버튼 클릭과 같은 작업을 하고 버튼을 클릭한 후 DOM의 모습을 봐야하기 때문에

// 2. Jest, Vitest의 역할
// - 테스트 러너
// - 테스트를 찾고 테스트를 실행, 통과, 실패 여부를 결정
// - 이 과정에서 Vitest를 사용
// - 구문 차이가 없다.
test("App contains correct heading", () => {
  // 시물레이션된 DOM을 생성하는 코드
  render(<App />);
  // 시뮬레이션된 DOM을 살펴보고 제공된 텍스트와 일치하는 오소를 찾는 코드
  // /learn react/i : 정규 표현식 코드. 대소문자 구분 없다는 표현식. 좀 더 유연하다는 장점
  // 정규 표현식을 사용하고 싶지 않다면. 문자열이어야 한다. 하지만 정확한 문자열로 지정해야함. ex) 'learn react'

  // 정규 표현식에 일치하는 코드가 있다면 headingElement에 저장된다.
  const headingElement = screen.getByText(/learn react/i);
  // Vitest 구문. Jest와 구문이 같음
  // headingElement가 문서와 일치하는지 확인하는 코드
  // 일치한다면 true를 반환
  expect(headingElement).toBeInTheDocument();
});

// 구문을 변경 후 저장했을때 자동으로 테스트가 진행됨. Vitest가 감시하고 있기 때문에
