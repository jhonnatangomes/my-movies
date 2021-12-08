import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

export default function convertDate(date) {
    return dayjs(date).format('DD [de] MMMM [de] YYYY');
}
