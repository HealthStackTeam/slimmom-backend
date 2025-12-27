export function bloodTypeFunc(type) {
  switch (type) {
    case 'A':
      return 1;
    case 'B':
      return 2;
    case 'AB':
      return 3;
    case '0':
    case 'O':
      return 4;
  }
}
