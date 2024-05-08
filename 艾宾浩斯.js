/*
 * @Author: jinxudong 1766551722@qq.com
 * @Date: 2024-05-07 11:23:20
 * @LastEditors: jinxudong 1766551722@qq.com
 * @LastEditTime: 2024-05-07 11:23:39
 * @FilePath: \extensions\艾宾浩斯.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 设定艾宾浩斯记忆曲线的时间间隔（以天为单位）
const intervals = [1, 2, 4, 7, 15];

// 函数生成每个单词的复习计划
function createEbbinghausSchedule(words) {
    // 获取当前日期
    const now = new Date();
    
    // 创建最终的复习计划数组
    const schedule = [];

    // 为每个单词生成基于艾宾浩斯记忆曲线的复习日期
    words.forEach(word => {
        intervals.forEach(interval => {
            // 计算复习日期
            const reviewDate = new Date(now);
            reviewDate.setDate(now.getDate() + interval);

            // 将结果添加到复习计划中
            schedule.push({
                word: word,
                reviewDate: reviewDate.toISOString().split('T')[0] // 仅保留日期部分
            });
        });
    });

    // 根据复习日期进行排序
    schedule.sort((a, b) => new Date(a.reviewDate) - new Date(b.reviewDate));

    return schedule;
}

// 示例单词数组
const words = ['apple', 'banana', 'cherry', 'date', 'fig'];

// 生成复习计划
const schedule = createEbbinghausSchedule(words);

// 打印结果
console.log(schedule);
