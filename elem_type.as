package  {
	
	public class elem_type 
	{
		
		public static var sx:Array = ["","草","水","火","飞行","电","机械","地面","普通","冰","超能","战斗","光","暗影","神秘","龙","圣灵","次元","远古","邪灵","自然"];
		public static var sx_2:Array = ["","草 超能","草 战斗","草 暗影","水 超能","水 暗影","水 龙","火 飞行","火 龙","火 超能","飞行 超能","光 飞行","飞行 龙","电 火","电 冰","电 战斗","暗影 电","机械 地面","机械 超能","机械 龙","地面 龙","战斗 地面","地面 暗影","冰 龙","冰 光","冰 暗影","超能 冰","战斗 火","战斗 暗影","光 神秘","暗影 神秘","神秘 超能","圣灵 光","飞行 神秘","地面 超能","暗影 龙","圣灵 暗影","远古 战斗","火 神秘","光 战斗","神秘 战斗","次元 战斗","邪灵 神秘","远古 龙","光 次元","远古 圣灵","水 战斗","电 龙","光 火","光 暗影","邪灵 龙","远古 神秘","机械 次元","战斗 龙","战斗 自然","邪灵 机械","电 次元","远古 火","火 暗影","飞行 暗影","机械 暗影"];
		public static var sx2:Array = [[0,0],[1,10],[1,11],[1,13],[2,10],[2,13],[2,15],[3,4],[3,15],[3,10],[4,10],[12,4],[4,15],[5,3],[5,9],[5,11],[13,5],[6,7],[6,10],[6,15],[7,15],[11,7],[7,13],[9,15],[9,12],[9,13],[10,9],[11,3],[11,13],[12,14],[13,14],[14,10],[16,12],[4,14],[7,10],[13,15],[16,13],[18,11],[3,14],[12,11],[14,11],[17,11],[19,14],[18,15],[12,17],[18,16],[2,11],[5,15],[12,3],[12,13],[19,15],[18,14],[6,17],[11,15],[11,20],[19,6],[5,17],[18,3],[3,13],[4,13],[6,13]];
		public static var atkType:Array = ["物攻","特攻","必杀技","属性"]

		public function elem_type() 
		{
			super();
		}
		
		public function elem_back(elem:int):Array
		{
			var arr:Array = [];
			if(elem<10000)
			{
				arr=[elem,22];
				return arr;
			}
			else
			{
				elem = elem-10000;
				arr = sx2[elem];
				return arr;
			}
		}
		
		
		public function wholename(sxint:int):String
		{
			var finalname:String;
			if(sxint<10000)
			{
				finalname = sx[sxint];
				return finalname;
			}
			else
			{
				sxint = sxint-10000;
				finalname = sx_2[sxint];
				return finalname;
			}
		}
		
		public function atk_back(typ:int):String
		{
			var typename:String = atkType[typ-1];
			return typename;
		}
		
		public function get sx1():Array
		{
			return sx;
		}
		
		public function get sxto2():Array
		{
			return sx_2;
		}
		
		public function get sxelem2():Array
		{
			return sx2;
		}
		
		
	}
	
}
