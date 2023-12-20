

//# list class
export const HEADER_TABLE_LIST_CLASS =  ["Mã LỚP","TÊN LỚP","KHÓA","NGÀY KHAI GIẢNG","NGÀY KẾT THÚC","GIÁO VIÊN" ,"TRỢ GIẢNG","SÔ HỌC SINH","", "" ,""]
export const ATTRIBUTE_TABLE_LIST_CLASS = [ 
'code',
'name',
'course_name', 
'opening_date',
'closing_date',
'teacher_name', 
'assistant_name', 
'number_students' ]
export const NAME_TABLE_LIST_CLASS  = "Danh Sách Lớp Học";


//# list student errolment
export const HEADER_TABLE_LIST_ENRROLL =  [ "STT","MÃ SỐ","TÊN HỌC SINH" ,""]
export const ATTRIBUTE_TABLE_LIST_ENRROLL = [ "id", "student_code","student_name" ]
export const NAME_TABLE_LIST_ENRROLL  = "Danh Sách Lớp Học";




// list classlesson
export const HEADER_TABLE_LIST_LESSON =  [ "TIẾT","THỜI GIAN","GIÁO VIÊN" ,"TRỢ GIẢNG" ,"NỘI DUNG BUỔI HỌC" ,"GIÁO VIÊN NHẬN XÉT","TRỢ GIẢNG NHẬN XÉT","LÝ DO ĐỔI GIÁO VIÊN" ,"LÝ DO ĐỔI TRỢ GIẢNG", "","",""]
export const ATTRIBUTE_TABLE_LIST_LESSON = [ "lesson_number", "tine_lession", "teacher_name", "assistant_name", "name","teacher_comment", "assistant_comment","teacher_change_reason","assistant_change_reason" ]
export const NAME_TABLE_LIST_LESSON  = "Danh Sách Tiết Học ";


//# thứ trong tuần
export const DAYS =[
    { label:  'Thứ 2', value:  '2', id:2 },
    { label:  'Thứ 3', value:  '3', id:3},
    { label:  'Thứ 4', value:  '4', id:4 },
    { label:  'Thứ 5', value:  '5', id:5 },
    { label:  'Thứ 6', value:  '6', id:6 },
    { label:  'Thứ 7', value:  '7', id:7 },
    { label:  'Chủ Nhật', value:  'CN', id:8 },
]

export const HEADER_TABLE_LIST_STUDENT = [ "STT", "MÃ HỌC SINH", "TÊN HỌC SINH", "NOTE" ,"Điểm Danh", ""]
export const ATTRIBUTE_TABLE_LIST_STUDENT = [ "student_id" ,"student_id","student_name","status","memo"]
export const NAME_TABLE_LIST_STUDENT = "Điểm Danh Học Sinh";


export const STATUS_STUDENT = [
    { id :1, name:"Chưa Tham Gia"}, {id:2 , name:'có mặt'},{id:3 , name:'Vắng Mặt'},{id:4 , name:'Đi Trễ'}
]







