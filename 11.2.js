function isPrime(number) {
  if (number <= 1 || number > 1000) {
    return "Данные неверны";
  } else if (number === 2) {
    return "Простое число";
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  }
}