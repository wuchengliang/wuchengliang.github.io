            * a标签 （
                * anchor, 锚
                * 语义是一个链接，链接地址写在  href（Hyperlink REFerence）属性里
                    * 可以链接到的类型非常多，而且一般来说是可扩展的
                        * 绝对网址，fullpath
                            * `<a href="https://jd.com/">京东</a>`
                        * 页内特定位置跳转地址
                            * `<a href="#pos1"></a>`
                        * 其它页特定位置跳转地址
                            * `<a href="http://jd.com/#footer"></a>`
                        * 这个在书目的章节跳转在使用的比较多
                        * 相对路径
                            * <a href="https://baidu.com/">baidu</a>
                            * <a href="a.html">baidu</a>

                            * `<a href=".././../a/b/../index.html"></a>`
                            * `<a href="./index.html"></a>`
                            * `<a href="../index.html"></a>`
                              * http://a.com/a/b/c.html
                                * http://a.com/a/b/index.html
                                * http://a.com/a/index.html
                            * `<a href="/index.html"></a>`
                              * http://a.com/a/b/lkj/adsfa/sdf/c.html
                              * http://a.com/index.html
                        * 电子邮件
                            * `<a href="mailto:aaa@bbb.com"></a>`
                            * `<a href="mailto:aaa@bbb.com?title=1&subject=2&content=3"></a>`
                              * 需要在电脑安装邮件客户端
                        * 电话号码　tel:18611075877
                          * 主要用在手机页面上
                        * QQ/taobao 临时会话
                          * tencent://temp-chat?QQ=285696737
                          * thunder://ghjk;adfklasdhfkweuhfasdlfk
                        * 等等等等
                            - thunder://LKDJOIE7436239/
                        * 空的href属性 href=""  href="."
                            * 链接到当前页面
                                * 所以仅以#开头的值是中转到当前页面的特定位置
                            * <img src="">
                            * 类似的，如果一个img标签的src属性为空，也将对应当前页面地址
                                * https://www.nczonline.net/blog/2009/11/30/empty-image-src-can-destroy-your-site/
                * target属性
                    * 可以指定在哪个窗口打开链接
                        * 几个特殊值,关键字
                            * _blank，链接在空白的窗口显示，也就相当于新打开一个窗口了
                            * _self，其实这个是默认值，就是在当前窗体打开
                            * _parent，链接在父窗体显示
                            * _top，链接在顶层窗体显示
                        * 自定义值
                            * shopingcart，要求不能以_开头，出处：https://www.w3.org/TR/html-markup/datatypes.html#common.data.browsing-context-name-def
                            * 这点等讲到iframe等标签时再说
                                - _parent
                                - _top这两个属性也是需要讲到iframe时再提起

                * 在html5中，还有一个download属性
                    * 表示点击这个链接将下载链接对应的文件，而不是跳转到目标页面，下载的文件名以download属性的值来命名
                        * `<a href="xxx/jianai.pdf" download="简爱.pdf">点我下截《简爱》完整版</a>`
                        * 只能触发下载自己网站上的资源
                        * 问题，如果同时有target=“_blank”，又有download属性，它如何行为呢？
                            * 请自行测试
                        * 为什么要有这个属性呢？传统浏览器中，要触发下载，需要服务端的支持，给出特定的http头才会触发浏览器下载而不是打开对应的内容
                            * 这个属性的出现可以让点击下载完全由前端来完成
            * img 标签
                * image
                * 表示一张图片
                * 用src(source)属性表示图片的地址
                    * 同样也可以是绝对地址，相对地址
                        * `<img src="http://www.baidu.com/logo.png" alt="" title="tooltip">`
                        * `<img src="../abc.jpg" alt="">`
                        * `<img src="/abc.jpg" alt="">`
                        * <img srcset="a.jpg 1x, b.jpg 2x, c.jpg 3x">
                        * hd/a.jpg
                        * fhd/a.jpg
                        *
                        * 1366*768
                        * 19吋，1440*900
                        * mac pro 1440*900  2880 * 1800 2k
                        * 1280*720/800
                        * 23， 1920*1080 -> 0.3mm 1
                        * 4k 1920*1080 3840*2160
                        * 5k 1920*1200 * 4
                        * 2 笔记本屏幕
                        * 3 手机
                        * src指定的图片可以是浏览器支持的任意图片格式
                            * jpg/jpeg,png,bmp,gif,webp,svg,ico
                            * 注意psd格式应该是不支持的，因为它是photoshop专有的格式，支持它需要大量的代码而且psd格式的文件一般很大，一般都在几十M上下
                * 同时，用 alt 属性表示图片在加载失败时的替换文本
                    * 类似于markdown中图片的替换文档`![加载失败的替换文档](image source)`，事实上两者基本上是等同的
                    * alt 的全程是 alternative
                        * 自己查询这个单词的意思，就明白为啥用这个词了
                        * 键盘上的Alt键是这个单词的前缀，即 alter
                * 可以使用 width 和 height 属性定义图片的宽和高
                    - 只写一个的话另一个会根据图片原始比例计算出来
                    - 图片一般来说有自己的宽高（natural width/height）
                    - 但是图片加载往往需要时间，而图片在加载完成之前浏览器是不知道其宽高的，所以就会产生页面抖动的问题
                    - 所以一般会在标签上把宽高写出来，这样图片加载过程中页面就不会抖动了
                * usemap="#themap"
                  * <map>
                       <area title="xxxx" href="xxx" shape="rect" coords="0,0,100,100">
                       <area title="xxxx" href="xxx" shape="circle" coords="0,0,100,100">
                       <area title="xxxx" href="xxx" shape="poly" coords="0,0,100,100">
                    </map>
                    - 可以让图片不同区域对应不同的链接
                    - 后面说到map标签后再说
            * span 标签
                * <p>aaa <strong>bbb</strong> ccc</p>
                * 是一个没有明确语义(通用语义)的标签
                * 一般来说想要给特定的内容加样式时可以用一个span标签将内容包起来
                    * 后面学到css就知道了
            * div

            * br
                * break
                * 换行
                * 自闭合标签
                * <br>
            * hr
                * horizontal
                * 水平分隔线
                * 自闭合标签
                * 强行写做`<hr>some text</hr>`的话里面的内容会被移出标签
                    - 可以理解为没有</hr>标签
            * base 基准
                - `<base href="页面中所有相对路径的基准地址" target="页面中所有链接的打开位置">`
                    + href属性表示页面中所有**相对路径**的基础路径
                        * 一定要以/即目录结尾
                            - `<base href="https://www.baidu.com/abc/">`
                            - `<base href="/">`相当于`<base href="https://www.baidu.com/">`
                    + target属性表示页面中**所有链接**的打开位置
                        * 当然，可以在页内的a标签中用它自己的target属性覆盖用base标签设置的全局打开位置
                - 有些框架等可能会利用这个特性







            * font/blink/marquee
              * <blink> lsk <font>jf</font> dowe </blink>
              * <marquee> foo </marquee>
                * deprecated 不推荐使用
                * obsolete   已废弃
                * 字体
                    - 用size属性表示大小
                    - face属性表示字体  fontface
                    - color属性表示颜色
                    * <font size="25px" face="幼圆" color="red"></font>
                * 已废弃
                * 早些年不用css时可以使用这个标签指定字体等
                * 所有已废弃的标签将不再提及
            * em
                * emphasis
                * 语义为**强调**
            * strong
                * 语义也为强调
                * 但强度跟em不同，strong的强调更重一些
            * b bold
                * 只是样式上加粗
            * u underline
            * i italic
                * 多数网站会这个标签来表示图标








            * u underline
            * i
                * italic，斜体的，一般编辑器（如word）的斜体按钮就是用的一个斜着的I图标表示
                * 在以前，这个标签就是表示斜体文字的
                * 但html5中对其语义进行了明确
                    * 用来表示由于某些原因需要与普通文本区分的文本
                * 默认情况下为斜体
                * 因为跟icon这个单词的首字母一样，很多人/框架/库也用这个标签来表示图标
                    - http://fontawesome.io/
                        * `<i class="fa fa-star"></i>`
            * `<!-- dfghjkl -->`
                <!-- 注释 -->
                - 没有基础的同学可能对注释这个概念有点陌生
                    + **注释是对程序本身的解释，几乎不会对程序的行为造成任何影响**
                        * 说几乎，是因为有些注释还是会对程序有一些影响
                    + 几乎任意语言里都有注释
                        * C/C++,JS,PHP，java等语言//   ,  /*  */ comment block  c style
                        * bash 脚本（即命令行脚本），python
                            - 以#做为注释
                        * css
                            - 以/**/内的内容为注释
                            - xcolor: red;

              * html entity
              - 转义(escape)：html entity HTML实体
                * &name;
                * &#number; 十进制数，&#25105; 我
                * &#xHHHH; 十六进制数,&#x6211;
                  * Hexdecimal
                * Unicode
                * 常见具名html实体：
                  * &nbsp; non-breaking space 160号空格
                  * &amp; &符
                  * &copy; 版权符
                  * &lt; 小于号 lettle then
                  * &gt; 大于号 greater then
                  * &quot; 双引号 quote
                  * &apos; 单引号
                  * 文档：
                    * Google： html entity
                    * https://dev.w3.org/html5/html-author/charref
                    * http://www.w3school.com.cn/html/html_entities.asp
                    * http://www.w3school.com.cn/tags/html_ref_entities.html
                    * [ square bracket ]
                    * { curly braces } mustcache
                    * ( parentheses )
                    * ; semicolon
                    * : colon
                    * , comma
                    * . period
                    * / slash
                    * \ backslash
                    * ? question mark
                    * + plus
                    * * times star asterisk
                    * | vertical  | bar  |
                    * ! exclaimation
            * 对空白字符的忽略 我 我
              * 默认情况下浏览器忽略文字与文字之间多于一个的空格，换行符会被全部忽略
                * 当然css可以改变这种行为，后我们会看到




            * 可访问性 accessibility   a11y  internationalizition  i18n
              * 在各个设备上访问/对各种人群可访问/视障/听障
              * 读屏软件
              * windows 高比对度主题
              * a r i a / role
                * accessibly rich Internet Application
                * 网页应用程序
                * role属性提示浏览器当前元素是一个何种视觉元素
                  * role=""
                * aria-xxx="yyy"提示浏览器当前视觉元素的状态或其它信息

            * pre
              * pre formatted
              * 表示有预定义格式的文本
                  * 里面的内容的回车跟空格都会被保留
              * 本来有个width属性，表示每行最多的字符
                  - 本来支持度也不好，然后在html5中被弃用了，因为可以用css来更精确的控制
              * 常与code标签 `配合` 使用，用来在`网页`里显示高亮过的代码
                * <pre><code class="">code goes here</code></pre>
                ```js
                var a = 8
                ```
                <p>  foo  <code> bar </code>   </p>

            * 列表类标签
                - ol，ul
                    + Ordered List, Unordered List
                    + 其直接子结点必须只能是li标签 list item
                        * li内可以是任意其它标签
                    + 默认会在每多一层级的列表中缩进
                    + 并带有列表项标号，有序和无序的
                    * 多个同类项的重复，就应该使用ol/ul标签
                    * LISP List Procressing SICP
                    * 黑客与画家
                - dl
                    + Description List
                    + dt
                        * Description Term
                    + dd
                        * Description Description
                    + 一个列表项是**一个dt**和**一个或多个dd**一起算一组
                    + 此标签与ol/ul有些区别，在于
                        * 一个dt可以对应多个dd
                    ```html
                    <ul>
                      <li>
                        <span>老师</span>
                        <span>谢然</span>
                      </li>
                    </ul>
                    <dl>
                        <dt>老师</dt>
                        <dd>谢然</dd>

                        <dt>学生</dt>
                        <dd>张三</dd>
                        <dd>李四</dd>
                        <dd>王五</dd>
                    </dl>
                    ```

            * 表单标签
                - form标签
                    - input
                        - https://www.google.com.hk/search?q=invalid+inentity+escape+in+regular+expression
                        - https://stackoverflow.com/questions/36953775/firefox-error-unable-to-check-input-because-the-pattern-is-not-a-valid-regexp
                        - https://www.fxsitecompat.com/en-CA/docs/2016/input-pattern-now-sets-u-flag-for-regular-expressions/
                        - https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input
                    * 属性
                        + action
                            * 表单提交的地址
                        + target
                            * 行为类似a标签的target
                        + method
                            * 表单提交方式
                                - get
                                    + 将表单字段拼成querystring
                                        * 什么是querystring？
                                            - http://abc.com/?a=1&b=2&c=3
                                - post
                                    * 这个等学到http再说
                        + enctype，编码方式
                            * 在讲到http的时候再谈
                - input
                    + type属性的各项值
                        * text
                            - 文本
                        * password
                            - 密码
                        * checkbox
                            - 复选框
                            - 以name相同分组
                            - checked属性表示默认选中
                        * radio
                            - 单选框
                            - 剩余同上
                        * file
                            - accept
                                + 可以接受的文件类型
                                + `<input type="file" name="" id="" accept="image/*,text/*">`
                                * MIME Type
                                + `<input type="file" name="" id="" accept=".jpg,.png,.gif,.jpeg,.webp,.exe" value="c:/user/xieran/desktop/a.pdf">`
                                * http://wwww.a.com/favicon.ico
                            - 安全问题
                            - multiple
                                + 是否支持多选文件
                        * hidden
                            - 隐藏的输入域
                            - value设置其值
                            - name设置名字
                        * 为以下三个值时，都表现为按钮的样式，按钮上的文字需要用value属性来设置
                        * image
                            - 从功能上讲是一个表单提交按钮
                            - 从形态上看是一个图片
                            - 此时需要使用src属性指定图片的地址
                            - 现在基本上不这么用，之所以有这个用法，是以前不用js时想做出漂亮的按钮时，需要这么用
                            - 在html5中，可以在这种标签上给定width跟height，类似img标签相应的属性，src，alt
                        * button
                        * submit
                            - 单击时会触发表单的提交
                        * reset
                            - 单击时会重置表单为初始状态
                        * **以下为html5新增属性值**
                        * number
                            - 输入数字
                            * e,.,-
                            * -3.14e-8
                            *
                        * email
                            - multiple
                            - 使用半角逗号分隔每个地址
                        * date
                        * datetime-local
                        * time
                        * url
                          * protocal://user:password@domain:port/a/b/c/d.html?a=b&c=d#sldjfoiwjeofij
                          * 百度.中国
                        * week
                        * month
                        * tel
                        * range
                            - min，4
                            - max，10
                            - step，2
                        * color
                            - value将返回十六进制颜色#abcdef
                        * 不能识别的值，当做text来处理
                    * input的其它属性
                        - value
                            + 为按钮形态时设置上面的文字
                            + 为输入框时设置里面的默认内容
                              * datetime-local
                                * https://zh.wikipedia.org/wiki/ISO_8601
                        - disabled
                            + 无值的属性
                            + 禁用这个输入域
                        - required
                            + 设置这个输入域为必填项
                            + 不填的话无法用**正常手段**触发表单提交
                        - maxlength
                            + 为文本输入框时设置输入的最大长度
                        - minlength
                            + 同上，但为设置最小长度
                            + 不过兼容性不太好，不少浏览器没有实现
                                * 有点矛盾，不填的时候是空的，当然会非法
                        - placeholder
                            + 占位符
                            + 提示性文字，一旦输入内容就消失
                        - autofocus
                            + 自动获得焦点，即页面加载完后光标自动在这个元素内
                        - tabindex
                            + 按tab键在不同输入域之间跳转时的顺序
                            + 会往顺序更大的元素跳
                            + 为-1的话会跳过那个元素
                        - name
                            + 很重要，表单提交时，这个域/字段/框/FormControl的名字
                            + 同时，在radio和checkbox阵列里，name相同的元素被分在一组里
