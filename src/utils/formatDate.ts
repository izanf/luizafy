/**
 * 
 * @param date 
 * @returns 23/11/2021
 */
const formatDate = (dateRAW: string) => {
  const date = new Date(dateRAW);

  return new Intl.DateTimeFormat(navigator.language).format(date);
}

export default formatDate;
