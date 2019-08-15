import $ from 'jquery';

const SPEAKER_RECRUITMENT = '이 세션을 빛내주세요!';
const SPEAKER_RECRUITMENT_HOVER = '연사 신청하기';

$('#btn-speaker-recruitment').hover(e => {
    $(e.target).text(SPEAKER_RECRUITMENT_HOVER);
    $(e.target).addClass('pfont-b');
}, e => {
    $(e.target).text(SPEAKER_RECRUITMENT);
    $(e.target).removeClass('pfont-b');
});