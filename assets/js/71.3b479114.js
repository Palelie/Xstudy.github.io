(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1189:function(t,s,_){t.exports=_.p+"assets/img/1641491178(1).6e953b09.jpg"},1190:function(t,s,_){t.exports=_.p+"assets/img/1641491085(1).52d39873.jpg"},1795:function(t,s,_){"use strict";_.r(s);var a=_(1),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"其他注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他注意事项"}},[t._v("#")]),t._v(" 其他注意事项")]),t._v(" "),a("h2",{attrs:{id:"_1、switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、switch"}},[t._v("#")]),t._v(" 1、switch")]),t._v(" "),a("p",[t._v("switch（）语句括号内只能接收int和string（jdk8以前只支持int）类型数据（会进行数据类型强制转换）")]),t._v(" "),a("h2",{attrs:{id:"_2、jvm的内存结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、jvm的内存结构"}},[t._v("#")]),t._v(" 2、JVM的内存结构")]),t._v(" "),a("p",[t._v("主要内存空间有三块："),a("strong",[t._v("堆区（内存）、栈区（内存）、方法区")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("方法区")]),t._v("：类加载器classloader，将硬盘上的xxx.class字节码文件装载到JVM的时候，会将字节码文件存放到方法区中，然后JVM会从代码中寻找main函数开始执行。也就是说，"),a("strong",[t._v("方法区中存储的是代码片段，即class字节码")]),t._v("。（因为类需要加载，所以方法区当中最先有数据）")]),t._v(" "),a("li",[a("strong",[t._v("栈区")]),t._v("：在方法被调用的时候，该"),a("strong",[t._v("方法需要的内存空间")]),t._v("在栈中分配。即方法中的"),a("strong",[t._v("局部变量存储在栈中")]),t._v("（栈的活动最频繁）")]),t._v(" "),a("li",[a("strong",[t._v("堆内存")]),t._v("：凡是通过new运算符创建的对象，都存储在堆内存当中。即"),a("strong",[t._v("对象和对象的实例变量都存储在堆内存当中")]),t._v("。new运算符的作用就是在堆内存中开辟一块空间")])]),t._v(" "),a("h2",{attrs:{id:"_3、不建议轻易使用递归-尽量用循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、不建议轻易使用递归-尽量用循环"}},[t._v("#")]),t._v(" 3、不建议轻易使用递归，尽量用循环")]),t._v(" "),a("p",[t._v("原因：")]),t._v(" "),a("ol",[a("li",[t._v("即使递归有正确的结束条件，但也有可能因为递归的太深导致栈内存溢出（stackOverflowError）")]),t._v(" "),a("li",[t._v("相比于循环，递归效率低，耗费的内存多")]),t._v(" "),a("li",[t._v("如果使用不当，会导致JVM死掉")])]),t._v(" "),a("h2",{attrs:{id:"_4、调整jvm初始堆-栈-大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、调整jvm初始堆-栈-大小"}},[t._v("#")]),t._v(" 4、调整JVM初始堆（栈）大小")]),t._v(" "),a("p",[t._v("如果一定需要使用递归，且即使递归结束条件正确依然出现栈内存溢出（stackOverflowError），此时只能调整JVM初始堆（栈）大小")]),t._v(" "),a("p",[t._v("方法：命令行窗口输入"),a("code",[t._v("java -X")]),t._v("，找到"),a("code",[t._v("-Xms<size>")]),t._v("和"),a("code",[t._v("-Xmx<size>")]),t._v("调整初始和最大堆大小，"),a("code",[t._v("-Xss<size>")]),t._v("设置线程堆栈大小")]),t._v(" "),a("p",[t._v("例如："),a("code",[t._v("java -Xss xxxGB xx.java")])]),t._v(" "),a("h2",{attrs:{id:"_5、空指针异常-nullpointerexception"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、空指针异常-nullpointerexception"}},[t._v("#")]),t._v(" 5、空指针异常（NullPointerException）")]),t._v(" "),a("p",[a("img",{attrs:{src:_(1189),alt:"1641491178(1)"}})]),t._v(" "),a("p",[a("img",{attrs:{src:_(1190),alt:"1641491085(1)"}})]),t._v(" "),a("h2",{attrs:{id:"_6、return-和system-exit-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、return-和system-exit-0"}},[t._v("#")]),t._v(" 6、return 和System.exit(0)")]),t._v(" "),a("p",[t._v("return：用于直接结束该方法并返回值（void类型无需写返回值）")]),t._v(" "),a("p",[t._v("System.exit(0)：用于直接结束java虚拟机（JVM）")]),t._v(" "),a("h2",{attrs:{id:"_7、main方法中的string-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、main方法中的string-args"}},[t._v("#")]),t._v(" 7、main方法中的String[] args")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("public static void main(String[] args)")]),t._v("该方法用户负责编写，JVM负责调用")]),t._v(" "),a("li",[t._v("JVM调用的时候一定会传一个数组过来，默认长度为空的数组{}（注意不是null，会导致出现空指针异常）")]),t._v(" "),a("li",[t._v("这个数组是留给用户的，用户可以在控制台上输入参数，参数会通过识别空格自动转换为String[]数组\n"),a("ul",[a("li",[t._v("例如控制台输入"),a("code",[t._v("java test abc def xyz")]),t._v("，或在IDEA的 run——edit configurations 配置输入参数")]),t._v(" "),a("li",[t._v('args数组里就会有{ "abc" , "def" , "xyz" }')])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);