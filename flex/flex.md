## FLEX 布局

### 定位术语：

* flex 容器( flex container / box )：采用flex布局的父级元素。
* 主轴( main axis )：容器的轴，默认水平方向，从 main start 到 main end 。
* 交叉抽( cross axis )：容器的轴，默认垂直于主轴，从 cross start 到 cross end。
* flex 项目( flex item )：容器的子元素，沿轴分布在容器中。
* 主轴空间( main size )： 单个 flex 项目占据的主轴空间。
* 交叉轴空间( cross size )：单个 flex 项目占据的交叉轴空间。

### 容器属性：

#### 1. 主轴方向：flex-direction

定义了主轴的方向(即项目的排列方向)

* row(默认) : main start 在左。
* row-reverse : main start 在右。
* column : main start 在上。
* column-reverse : main start 在下。

#### 2. 主轴换行：flex-wrap

定义了当主轴上的 flex-item 排不下，主轴如何换行

* nowrap(默认) : 不换行，压缩 main size。
* wrap : 在沿交叉轴方向(默认向下)创建延申主轴。
* wrap-reverse : 在交叉轴反方向延申主轴。

#### 3.主轴简写：flex-flow

用来一次性定义 flex-direction 和 flex wrap

* \[ flex-direction 的属性值 \]    \[ flex-flow 的属性值 \]

#### 4.主轴对齐：justify-content

flex-item 在主轴方向上的对齐方式

* flex-start : 从 main start 到 main end 。 
* flex-end : 从 main end 到 main start 。
* center : flex item 整体中线和主轴中线对齐。
* space-between : flex item 两端对齐 main start 和 main end ，flex item 之间的间隔相等。
* space-around : 给每个 flex item 两侧相等的间隔 （所以项目之间的间隔是间隔尺寸\*2，项目距离边框是间隔尺寸）。

#### 5.交叉轴对齐：align-items

flex-item 在交叉轴方向上的对齐方式

* flex-start : flex item 的顶部对齐 cross start 。
* flex-end : flex item 的底部对齐 cress end。
* flex-center : flex item 的中线对齐 cross axis 的中点。
* baseline : flex item 第一行文字的基线对齐。
* stretch（默认） :  如果 flex item 未设置高度 或 高度为auto ，flex item 的高度沾满整个容器的高度。

#### 6.主轴在交叉轴上的分布：align-contenr

当项目有多根主轴（flex-wrap) 时，主轴在交叉轴方向的对齐方式

* flex-start : 第一根 main axis 靠近 cross start ， 后续主轴沿 cross axis 分布。
* flex-end : 最后一根 main axis 靠近 cross end ， 前面主轴沿 cross axis 反方向分布。
* center : 最中间的 main axis 对齐 cross axis 的中点。
* space-between : 第一根 main axis 对齐 cross start ， 最后一根 main axis 对齐 cross end ， 其他 main axis 在 间距相等均布。
* space-around ： 给每个 main axis 两侧相等的间隔（所以轴线之间的间隔是 间隔尺寸\*2，main axios 距离边框是间隔尺寸）。
* stretch(默认值) ： 将 flex item 项目拉长，占满整个 cross axis 。



### 项目属性

#### 1. flex-basis : flex item 的 main size
默认为 auto , 即 flex item 本身的尺寸
```css
	#item {
		flex-basis : 20px; 
	}
```
#### 2. flex-grow : flex item 的 main size 放大比例
当 main axis 上存在剩余空间时 , 各个 flex item 会按照此属性给定的比例来分配剩余空间 , 0为不分配 .
```css
	#item {
		flex-grow : 1;
	}
```
#### 3. flex-shrink : flex item 的 main size 缩小比例
当 main axis 空间不足时，各个flex item 的 mian size 会按照此属性给定的比例进行缩小 , 0 为不缩小 .
```css
	#item {
		flex-shrink : 1;/* 按照比例1缩小 */
	}
```
#### 4. flex : 对1，2，3的简写
属性值是对 flex-grow , flex-shrink , flex-basis 属性值的简写 . 该属性有两个快捷值：
  * auto:  flex-grow:1 , flex-shrink:1 , flex-basis:auto.
  * none: flex-grow:0 , flex-shrink:0 , flex-basis:auto. 
```css
	#item {
		flex : auto;
		/* 和下面等价： */
		flex-basis : auto;
		flex-grow : 1;
		flex-shrink : 1;
	}
```
#### 5. align-self : flex item 在 cross axis 上的对齐方式
这个属性值将覆盖 flex container 的 align-items 属性，默认为auto
```css
	#item {
		/*
			auto : 采用flex container 的 align-items . 当没有父元素时采用stretch . 
			其他属性值 : 和 align-items 一样 , 有 flex-start , flex-end , center , baseline , stretch
		*/
		align-self : auto;
	}
```

#### 6. order : 项目在 main axis 上的排序
项目数值越小越靠前
```css
	#item {
		order:1
	}
```