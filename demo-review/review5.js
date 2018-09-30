/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var aqiCityInput=document.getElementById("aqi-city-input");
	var aqiValueInput=document.getElementById("aqi-value-input");
	var city=aqiCityInput.value;
	var num=aqiValueInput.value;
	aqiData[city]=num;
	console.log(aqiData);
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var aqiTable=document.getElementById("aqi-table");
	var str="<tr><td>城市</td><td>空气质量</td><td>操作</td>";
	for(var city in aqiData){
		str+='<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button>删除</button></td></tr>';
	}
	aqiTable.innerHTML=str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

function init() {
	var addBtn=document.getElementById("add-btn");
	var aqiTable=document.getElementById("aqi-table");
    addBtn.addEventListener("click",addBtnHandle);
	aqiTable.addEventListener("click",function(e){
		if(e.target.tagName.toLowerCase()=="button"){
			var delCityName=e.target.parentNode.parentNode.cell[0].innerHTML;
			delBtnHandle(delCityName);
		}
	});
}

init();