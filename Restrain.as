﻿package  {
	
	public class Restrain{
		
		public static var Restrain:Array =  [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//0无
		                             [0,0.5,2,0.5,0.5,1,0.5,2,1,1,1,1,2,1,1,1,0.5,1,1,1,1,0,0],//1草
								     [0,0.5,0.5,2,1,1,1,2,1,1,1,1,1,1,1,1,0.5,1,1,1,0.5,0,0],//2水
		                             [0,2,0.5,0.5,1,1,2,1,1,2,1,1,1,1,1,1,0.5,1,1,1,0.5,0,0],//3火
		                             [0,2,1,1,1,0.5,0.5,1,1,1,1,2,1,1,1,1,1,0.5,1,0.5,0.5,0,0],//4飞行
		                             [0,0.5,2,1,2,0.5,1,0,1,1,1,1,1,2,0.5,1,0.5,2,1,1,0.5,0,0],//5电
						             [0,1,0.5,0.5,1,0.5,0.5,1,1,2,1,2,1,1,1,1,1,0.5,2,2,1,0,0],//6机械
						             [0,0.5,1,2,0,2,2,1,1,0.5,0.5,1,1,0.5,1,0.5,1,1,1,0.5,0,0],//7地面
		                             [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],//8普通
		                             [0,2,0.5,0.5,2,1,0.5,2,1,0.5,1,1,1,1,1,1,0.5,2,2,1,1,0,0],//9冰
						             [0,1,1,1,1,1,0.5,1,1,1,0.5,2,0,1,2,1,1,1,1,1,2,0,0],//10超能
						             [0,1,1,1,1,1,2,1,1,2,0.5,0.5,1,0.5,1,2,2,1,1,1,1,0,0],//11战斗
						             [0,0,1,1,1,1,0.5,1,1,0.5,2,1,0.5,2,1,1,0.5,1,1,0.5,0.5,0,0],//12光
		                             [0,1,1,1,1,1,0.5,1,1,0.5,2,1,0.5,2,1,1,0.5,2,1,0.5,1,0,0],//13暗影
						             [0,1,1,1,1,2,1,0.5,1,1,1,0.5,1,1,2,1,2,1,1,0.5,2,0,0],//14神秘
						             [0,0.5,0.5,0.5,1,0.5,1,1,1,2,1,1,1,1,1,2,2,1,1,2,1,0,0],//15龙
		                             [0,2,2,2,1,2,1,1,1,2,1,0.5,1,1,0.5,0.5,1,1,2,1,1,0,0],//16圣灵
						             [0,1,1,1,2,1,2,1,1,0.5,2,1,1,0,1,1,1,1,1,2,2,1,0,0],//17次元
		                             [0,2,1,1,2,1,0.5,1,1,0.5,1,1,1,1,2,2,1,1,1,1,1,0,0],//18远古
		                             [0,1,1,1,1,1,0.5,1,1,0.5,0.5,1,2,2,2,1,0.5,2,1,1,2,0,0],//19邪灵
		                             [0,2,2,2,2,2,0.5,2,1,2,0.5,0.5,2,0.5,0.5,1,1,0.5,1,0.5,1,0,0],//20自然
									 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//21属性
									 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]//22无

		public function Restrain()
		{
			super();
		}
		
		public function attribute_calculation(left1:int,left2:int,right1:int,right2:int):Number //若是单属性则第二位写0
		{
			var Restrain_to_RIVAL:Number
			if(left2 != 22 && right2 !=22) //双方都是双属性
			{
				trace("双方都是双属性")
				if((Restrain[left1][right1] != 0 && Restrain[left1][right2] != 0) && (Restrain[left2][right1] != 0 && Restrain[left2][right2] != 0)) //正常克制系数
				{
					if(Restrain[left1][right1]==2 && Restrain[left1][right2]==2)
					{
					    if(Restrain[left2][right1]==2 && Restrain[left2][right2]==2)
					    {
					       Restrain_to_RIVAL=Number(((Restrain[left1][right1]+Restrain[left1][right2])+(Restrain[left2][right1]+Restrain[left2][right2]))/2)
					    }
					    else
					    {
					       Restrain_to_RIVAL=Number(((Restrain[left1][right1]+Restrain[left1][right2])+(Restrain[left2][right1]+Restrain[left2][right2])/2)/2)
					    }
					}
					else if(Restrain[left2][right1]==2 && Restrain[left2][right2]==2)
					{
						if(Restrain[left1][right1]==2 && Restrain[left1][right2]==2)
						{
							Restrain_to_RIVAL=Number(((Restrain[left1][right1]+Restrain[left1][right2])/2+(Restrain[left2][right1]+Restrain[left2][right2]))/2)
						}
						else
						{
							Restrain_to_RIVAL=Number(((Restrain[left1][right1]+Restrain[left1][right2])/2+(Restrain[left2][right1]+Restrain[left2][right2]))/2)
						}
					}
					else if((Restrain[left1][right1]!=2 || Restrain[left1][right2]!=2) && (Restrain[left2][right1]!=2 || Restrain[left2][right2]!=2))
					{
						Restrain_to_RIVAL=Number(((Restrain[left1][right1]+Restrain[left1][right2])/2+(Restrain[left2][right1]+Restrain[left2][right2])/2)/2)
						trace("正常克制")
					}
					
				}
				else if((Restrain[left1][right1] == 0 || Restrain[left1][right2] == 0) && (Restrain[left2][right1] != 0 && Restrain[left2][right2] != 0)) //对一号位属性无效
				{
					if(Restrain[left2][right1]==2 && Restrain[left2][right2]==2)
					{
						Restrain_to_RIVAL=Number((Number(Restrain[left1][right1]+Restrain[left1][right2])/4+(Restrain[left2][right1]+Restrain[left2][right2]))/2)
					}
					else
					{
						Restrain_to_RIVAL=Number((Number(Restrain[left1][right1]+Restrain[left1][right2])/4+(Restrain[left2][right1]+Restrain[left2][right2])/2)/2)
					}
					
				}
				else if((Restrain[left1][right1] != 0 && Restrain[left1][right2] != 0) || (Restrain[left2][right1] == 0 || Restrain[left2][right2] == 0)) //对二号位属性无效
				{
					if(Restrain[left1][right1]==2 && Restrain[left1][right2]==2)
					{
						Restrain_to_RIVAL=Number(((Restrain[left1][right1]+Restrain[left1][right2])+(Restrain[left2][right1]+Restrain[left2][right2])/4)/2)
					}
					else
					{
						Restrain_to_RIVAL=Number(((Restrain[left1][right1]+Restrain[left1][right2])/2+(Restrain[left2][right1]+Restrain[left2][right2])/4)/2)
					}
					trace("对二号位属性无效")
					
				}
				
			}
			else if(left2 ==22 && right2 !=22) //本方是单属性，对方是双属性
			{
				if((Restrain[left1][right1] != 0) && (Restrain[left1][right2] != 0)) //正常克制
				{
					if((Restrain[left1][right1]==2) && (Restrain[left1][right2]==2))
					{
						Restrain_to_RIVAL=Number(((Restrain[left1][right1])+(Restrain[left1][right2])))
					}
					else
					{
						Restrain_to_RIVAL=Number(((Restrain[left1][right1])+(Restrain[left1][right2]))/2)
					}
					
				}
				else if((Restrain[left1][right1] == 0) || (Restrain[left1][right2] == 0)) //本方对对方任意一项属性无效
				{
					Restrain_to_RIVAL=Number(((Restrain[left1][right1])+(Restrain[left1][right2]))/4)
				}
				
			}
			else if(left2 != 22 && right2 ==22) //本方是双属性，对方是单属性
			{
				if((Restrain[left1][right1] != 0) && (Restrain[left2][right1] != 0)) //正常克制
				{
					if((Restrain[left1][right1]==2) && (Restrain[left2][right1]==2))//本方单属性对对方双属性都克制
					{
						Restrain_to_RIVAL=Number(((Restrain[left1][right1])+(Restrain[left2][right1])))
					}
					else
					{
						Restrain_to_RIVAL=Number(((Restrain[left1][right1])+(Restrain[left2][right1]))/2) //本方单属性对对方双属性不都克制
					}
					
				}
				else if((Restrain[left1][right1] == 0) || (Restrain[left2][right1] == 0)) //本方任意一项属性对对方无效
				{
					Restrain_to_RIVAL=Number(((Restrain[left1][right1])+(Restrain[left2][right1]))/4)
				}
			}
			else if(left2 ==22 && right2 ==22) //双方为单属性
			{
				Restrain_to_RIVAL=Number(Restrain[left1][right1])
			}
			trace("克制系数"+Restrain_to_RIVAL)
			trace(Restrain[left1][right1])
			trace(Restrain[left1][right2])
			trace(Restrain[left2][right1])
			trace(Restrain[left2][right2])
			return Restrain_to_RIVAL;
			
		}

	}
	
}
