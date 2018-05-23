export class Util {
  public static formattedDate(d: Date): string {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }

  public static getNewDate( stm: string): Date {
    return (new Date(stm));
  }
}
