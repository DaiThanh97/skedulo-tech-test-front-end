import formatDateFns from "date-fns/format";

function formatDate(date: number | Date, format = "dd/MM/yyyy") {
  try {
    return formatDateFns(date, format);
  } catch (error) {
    return 'Invalid Date'
  }
}

export { formatDate };
