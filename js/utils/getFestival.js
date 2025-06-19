import { festivals } from "../data/data.js";

/**
 * 축제 데이터를 조건에 따라 필터링하여 반환합니다.
 *
 * @function getFestival
 * @param {string} [key] - 필터링할 기준이 되는 속성 이름 (예: 'countryCode', 'city', 'date', 'name', 'theme').
 * @param {string} [value] - 해당 속성의 비교값.
 * @returns {Array<Object>} 조건에 맞는 축제 객체들의 배열. 조건이 없으면 전체 데이터를 반환합니다.
 *
 * @example
 * // 전체 축제 목록 반환
 * const all = getFestival();
 *
 * // 국가 코드가 'JP'인 축제만 반환
 * const japanFestivals = getFestival('countryCode', 'JP');
 *
 * // 테마에 '음악'이 포함된 축제 반환
 * const musicFestivals = getFestival('theme', '음악');
 *
 * @warning key가 허용된 필터 키가 아닌 경우, 경고 메시지를 출력하고 빈 배열을 반환합니다.
 */

export function getFestival(key, value) {
  const validKeys = ["countryCode", "city", "date", "name", "theme", "id"]; // 허용된 필터 대상

  // 매개변수 없이 호출 시: 전체 반환
  if (!key && !value) return festivals;

  if (!validKeys.includes(key)) {
    console.warn(`지원하지 않는 필터 키: '${key}'`);
    return []; // 빈 배열 반환.
  }

  if (key === "theme") {
    return festivals.filter((item) => item.theme.includes(value));
  }

  return festivals.filter((item) => item[key] === value);
}

// 사용 예시
// import { getFestival } from './getFestival.js';

// const all = filterFestival(); // 전체 반환
// const japan = filterFestival('countryCode', 'JP'); // 나라코드가 JP인 축제들만 배열로 반환.
// const musicFestivals = filterFestival('theme', '음악'); // 테마가 음악인 축제들만 배열로 반환.
