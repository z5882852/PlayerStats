import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const PlayerHeatmap = ({ playerData }) => {
  return (
    <div>
      <h2>玩家在线时间热力图</h2>
      <CalendarHeatmap
        startDate={new Date('2023-05-24')} // 设置开始日期，默认为当前日期
        endDate={new Date('2023-05-30')} // 设置结束日期，默认为当前日期
        values={playerData} // 玩家在线时间数据，格式为 [{ date: 'yyyy-mm-dd', count: 1 }, ...]
        classForValue={(value) => {
          if (!value) {
            return 'color-empty'; // 自定义未定义值的颜色样式
          }
          return `color-scale-${value.count}`; // 自定义值的颜色样式
        }}
        showWeekdayLabels={false} // 是否显示星期几的标签
        weekdayLabels={['周日', '周一', '周二', '周三', '周四', '周五', '周六']} // 星期几的标签文本
      />
    </div>
  );
};

export default PlayerHeatmap;
