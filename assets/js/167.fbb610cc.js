(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1824:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_26-删除排序数组中的重复项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26-删除排序数组中的重复项"}},[s._v("#")]),s._v(" 26.删除排序数组中的重复项")]),s._v(" "),a("p",[a("code",[s._v("标签：双指针")])]),s._v(" "),a("h2",{attrs:{id:"题目-点此跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-点此跳转"}},[s._v("#")]),s._v(" 题目"),a("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-tudo/",target:"_blank",rel:"noopener noreferrer"}},[s._v("（点此跳转）"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("h4",{attrs:{id:"给你一个有序数组-nums-请你-原地-删除重复出现的元素-使每个元素-只出现一次-返回删除后数组的新长度。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给你一个有序数组-nums-请你-原地-删除重复出现的元素-使每个元素-只出现一次-返回删除后数组的新长度。"}},[s._v("#")]),s._v(" 给你一个有序数组 "),a("code",[s._v("nums")]),s._v(" ，请你 "),a("strong",[s._v("原地")]),s._v(" 删除重复出现的元素，使每个元素 "),a("strong",[s._v("只出现一次")]),s._v(" ，返回删除后数组的新长度。")]),s._v(" "),a("h4",{attrs:{id:"不要使用额外的数组空间-你必须在-原地-修改输入数组-并在使用-o-1-额外空间的条件下完成。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不要使用额外的数组空间-你必须在-原地-修改输入数组-并在使用-o-1-额外空间的条件下完成。"}},[s._v("#")]),s._v(" 不要使用额外的数组空间，你必须在 "),a("strong",[s._v("原地")]),s._v(" 修改输入数组 并在使用 O(1) 额外空间的条件下完成。")])]),s._v(" "),a("blockquote",[a("p",[s._v("备注：函数返回数组新长度，主函数打印出数组中 "),a("strong",[s._v("该长度范围内")]),s._v(" 的所有元素。")])]),s._v(" "),a("h3",{attrs:{id:"示例一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例一"}},[s._v("#")]),s._v(" 示例一：")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("输入：nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,1")]),s._v(",2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出：2, nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n解释：函数应该返回新的长度 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ，并且原数组 nums 的前两个元素被修改为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 。不需要考虑数组中超出新长度后面的元素。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("h3",{attrs:{id:"示例二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例二"}},[s._v("#")]),s._v(" 示例二：")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("输入：nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,0")]),s._v(",1,1,1,2,2,3,3,4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出：5, nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,1")]),s._v(",2,3,4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n解释：函数应该返回新的长度 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" ， 并且原数组 nums 的前五个元素被修改为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 。不需要考虑数组中超出新长度后面的元素。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[s._v("提示：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("0 <= nums.length <= 3 * 104")])]),s._v(" "),a("li",[a("code",[s._v("-104 <= nums[i] <= 104")])]),s._v(" "),a("li",[a("code",[s._v("nums")]),s._v(" 已按升序排列")])]),s._v(" "),a("h2",{attrs:{id:"实现代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现代码"}},[s._v("#")]),s._v(" 实现代码：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("class Solution "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\npublic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeDuplicates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fast"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//双指针法")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//空数组为特例")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("fast"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("fast"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//fast指针作为遍历指针，slow指针用来记录保存位置")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重点！！！画图试一下很好理解")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//主函数接受++slow值后，数组遍历只会遍历到该下标，数组剩下的数不管")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("时间：O(n)")]),s._v(" "),a("p",[s._v("空间：O(1)")])]),s._v(" "),a("h3",{attrs:{id:"解析-双指针法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析-双指针法"}},[s._v("#")]),s._v(" 解析：双指针法")]),s._v(" "),a("blockquote",[a("p",[s._v("分析：因为数组是"),a("strong",[s._v("排序")]),s._v("的，只要是"),a("strong",[s._v("相同的肯定是挨着的")]),s._v("，我们只需要遍历所有数组，然后前后两两比较，如果有相同的就把后面的给删除")]),s._v(" "),a("p",[s._v("解决方法：")]),s._v(" "),a("p",[s._v("使用两个指针，"),a("strong",[s._v("右指针始终往右移动")])]),s._v(" "),a("ul",[a("li",[s._v("如果右指针指向的值等于左指针指向的值，左指针不动。")]),s._v(" "),a("li",[s._v("如果右指针指向的值不等于左指针指向的值，那么左指针往右移一步，然后再把右指针指向的值赋给左指针。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);