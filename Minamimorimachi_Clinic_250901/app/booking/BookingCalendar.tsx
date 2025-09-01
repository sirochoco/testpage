
'use client';
import { useState } from 'react';

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  const getCurrentMonth = () => new Date();
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const timeSlots = [
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPastDate = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isWeekend = (date: Date | null) => {
    if (!date) return false;
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const isWednesday = (date: Date | null) => {
    if (!date) return false;
    return date.getDay() === 3;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const formatDate = (date: Date) => {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  };

  const days = getDaysInMonth(currentMonth);
  const monthYear = `${currentMonth.getFullYear()}年${currentMonth.getMonth() + 1}月`;

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50/30 to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">ご希望の日時を選択</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600">カレンダーからご希望の日付と時間をお選びください</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* カレンダー */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={prevMonth}
                className="p-2 hover:bg-pink-50 rounded-full transition-colors"
              >
                <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center text-pink-600 text-xl"></i>
              </button>
              <h3 className="text-2xl font-bold text-gray-800">{monthYear}</h3>
              <button 
                onClick={nextMonth}
                className="p-2 hover:bg-pink-50 rounded-full transition-colors"
              >
                <i className="ri-arrow-right-line w-6 h-6 flex items-center justify-center text-pink-600 text-xl"></i>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-4">
              {['日', '月', '火', '水', '木', '金', '土'].map(day => (
                <div key={day} className="text-center p-3 font-semibold text-gray-600 text-sm">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {days.map((date, index) => (
                <button
                  key={index}
                  onClick={() => date && !isPastDate(date) && !isWednesday(date) && setSelectedDate(date)}
                  disabled={!date || isPastDate(date) || isWednesday(date)}
                  className={`h-12 text-sm rounded-lg transition-all ${
                    !date
                      ? 'invisible'
                      : isPastDate(date)
                      ? 'text-gray-300 cursor-not-allowed'
                      : isWednesday(date)
                      ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                      : selectedDate && selectedDate.toDateString() === date.toDateString()
                      ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md'
                      : isToday(date)
                      ? 'bg-pink-100 text-pink-600 font-bold'
                      : isWeekend(date)
                      ? 'text-pink-600 hover:bg-pink-50'
                      : 'text-gray-700 hover:bg-pink-50'
                  }`}
                >
                  {date?.getDate()}
                </button>
              ))}
            </div>

            <div className="mt-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-pink-100 rounded"></div>
                  <span>今日</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-100 rounded"></div>
                  <span>定休日</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded"></div>
                  <span>選択中</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">※水曜日は定休日のため選択できません</p>
            </div>
          </div>

          {/* 時間選択 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {selectedDate ? `${formatDate(selectedDate)}の空き時間` : '時間を選択'}
            </h3>
            
            {!selectedDate ? (
              <div className="text-center py-16">
                <i className="ri-calendar-line w-16 h-16 flex items-center justify-center text-pink-300 text-6xl mx-auto mb-4"></i>
                <p className="text-gray-500">まず日付を選択してください</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md'
                          : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {selectedTime && (
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <i className="ri-check-circle-line w-5 h-5 flex items-center justify-center text-pink-600 mr-2"></i>
                      選択内容
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">日付:</span>
                        <span className="font-semibold text-gray-800">{formatDate(selectedDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">時間:</span>
                        <span className="font-semibold text-gray-800">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">施術時間:</span>
                        <span className="font-semibold text-gray-800">約60分</span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {selectedDate && selectedTime && (
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                選択した日時で予約を進めますか？
              </h3>
              <p className="text-gray-600 mb-8">
                {formatDate(selectedDate)} {selectedTime}〜<br />
                この日時で予約フォームに進みます
              </p>
              <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap">
                <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center mr-2"></i>
                予約フォームへ進む
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
