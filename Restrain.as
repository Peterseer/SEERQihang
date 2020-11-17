package
{
	import elem_type;
	import Attribution;

	public class Restrain
	{
		

		public static var Restrain: Array = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0无
			[0, 0.5, 2, 0.5, 0.5, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 1, 1, 1, 1, 0, 0, 0.5], //1草
			[0, 0.5, 0.5, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 0, 0, 0.5], //2水
			[0, 2, 0.5, 0.5, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 0, 0, 0.5], //3火
			[0, 2, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 1, 0.5, 0.5, 0, 0, 0.5], //4飞行
			[0, 0.5, 2, 1, 2, 0.5, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 1, 0.5, 0, 0, 2], //5电
			[0, 1, 0.5, 0.5, 1, 0.5, 0.5, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 0.5, 2, 2, 1, 0, 0, 1], //6机械
			[0, 0.5, 1, 2, 0, 2, 2, 1, 1, 1, 0.5, 1, 1, 0.5, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0, 0, 1], //7地面
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1], //8普通
			[0, 2, 0.5, 0.5, 2, 1, 0.5, 2, 1, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 2, 2, 1, 1, 0, 0, 0.5], //9冰
			[0, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 0, 1, 2, 1, 1, 1, 1, 1, 2, 0, 0, 1], //10超能
			[0, 1, 1, 1, 1, 1, 2, 1, 1, 2, 0.5, 0.5, 1, 0.5, 1, 2, 2, 1, 1, 1, 1, 0, 0, 1], //11战斗
			[0, 0, 1, 1, 1, 1, 0.5, 1, 1, 0.5, 2, 1, 0.5, 2, 1, 1, 0.5, 1, 1, 0.5, 0.5, 0, 0, 1], //12光
			[0, 1, 1, 1, 1, 1, 0.5, 1, 1, 0.5, 2, 1, 0.5, 2, 1, 1, 0.5, 2, 1, 0.5, 1, 0, 0, 1], //13暗影
			[0, 1, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 2, 1, 2, 1, 1, 0.5, 2, 0, 0, 0.5], //14神秘
			[0, 0.5, 0.5, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 0, 0, 1], //15龙
			[0, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 0, 0, 1], //16圣灵
			[0, 1, 1, 1, 2, 1, 2, 1, 1, 0.5, 2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0.5], //17次元
			[0, 2, 1, 1, 2, 1, 0.5, 1, 1, 0.5, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0, 0, 1], //18远古
			[0, 1, 1, 1, 1, 1, 0.5, 1, 1, 0.5, 0.5, 1, 2, 2, 2, 1, 0.5, 2, 1, 1, 2, 0, 0, 0.5], //19邪灵
			[0, 2, 2, 2, 2, 2, 0.5, 2, 1, 2, 0.5, 0.5, 2, 0.5, 0.5, 1, 1, 0.5, 1, 0.5, 1, 0, 0, 0.5], //20自然
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //21属性
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //22无
			[0, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 2, 1, 0.5, 1, 1, 2, 1, 1, 2, 1, 2, 2, 0, 0, 1] //23混沌
		] //23混沌

		public function Restrain()
		{
			super();
		}
		
		public function getRestrainByAttack(elem:int):Array
		{
			var useElemtype:elem_type = new elem_type();
			var elemArr:Array = useElemtype.elem_back(elem);
			var resultArr:Array = [];
			var elemArrPart:Array = useElemtype.elem_back(elem);
			trace("本方属性拆分："+elemArrPart[0]+" "+elemArrPart[1])
			for(var i:int=1;i<useElemtype.sx1.length;i++) //单属性
			{
				var enemyelemArr1:Array = useElemtype.elem_back(i);
				trace("敌方单属性拆分："+enemyelemArr1[0]+" "+enemyelemArr1[1])
				if(attribute_calculation(elemArrPart[0],elemArrPart[1],enemyelemArr1[0],enemyelemArr1[1])!=1)
				{
					var att:Attribution = new Attribution(String(i),attribute_calculation(elemArrPart[0],elemArrPart[1],enemyelemArr1[0],enemyelemArr1[1]));
					resultArr.push(att);
				}
				
			}
			
			for(var m:int=10001;m<useElemtype.sxelem2.length+10000;m++)
			{
				var enemyelemArr2:Array = useElemtype.elem_back(m);
				trace("敌方双属性拆分："+enemyelemArr2)
				if(attribute_calculation(elemArrPart[0],elemArrPart[1],enemyelemArr2[0],enemyelemArr2[1])!=1)
				{
					var att2:Attribution = new Attribution(String(m),attribute_calculation(elemArrPart[0],elemArrPart[1],enemyelemArr2[0],enemyelemArr2[1]));
					resultArr.push(att2);
				}
				
			}
			resultArr.sort(sortOnAttribution);
			return resultArr;
		}
		
		public function getRestrainByDefense(elem:int):Array
		{
			var useElemtype:elem_type = new elem_type();
			var elemArr:Array = useElemtype.elem_back(elem);
			var resultArr:Array = [];
			var elemArrPart:Array = useElemtype.elem_back(elem);
			trace("本方属性拆分："+elemArrPart[0]+" "+elemArrPart[1])
			for(var i:int=1;i<useElemtype.sx1.length;i++) //单属性
			{
				var enemyelemArr1:Array = useElemtype.elem_back(i);
				trace("敌方单属性拆分："+enemyelemArr1[0]+" "+enemyelemArr1[1])
				if(attribute_calculation(enemyelemArr1[0],enemyelemArr1[1],elemArrPart[0],elemArrPart[1])!=1)
				{
					var att:Attribution = new Attribution(String(i),attribute_calculation(enemyelemArr1[0],enemyelemArr1[1],elemArrPart[0],elemArrPart[1]));
					resultArr.push(att);
				}
				
			}
			
			for(var m:int=10001;m<useElemtype.sxelem2.length+10000;m++)
			{
				var enemyelemArr2:Array = useElemtype.elem_back(m);
				trace("敌方双属性拆分："+enemyelemArr2)
				if(attribute_calculation(enemyelemArr2[0],enemyelemArr2[1],elemArrPart[0],elemArrPart[1])!=1)
				{
					var att2:Attribution = new Attribution(String(m),attribute_calculation(enemyelemArr2[0],enemyelemArr2[1],elemArrPart[0],elemArrPart[1]));
					resultArr.push(att2);
				}
				
			}
			resultArr.sort(sortOnAttribution);
			return resultArr;
		}
		

		public function elemAttributionCombine(elemNum: int, attr: Number): String
		{
			return String(elemNum) + "|" + String(attr);
		}

		function sortOnAttribution(a: Attribution, b: Attribution): Number
		{
			var aAttri: Number = a.getAttribution();
			var bAttri: Number = b.getAttribution();

			if (aAttri < bAttri)
			{
				return 1;
			}
			else if (aAttri > bAttri)
			{
				return -1;
			}
			else
			{
				//aAttri == bAttri
				return 0;
			}
		}


		public function attribute_calculation(left1: int, left2: int, right1: int, right2: int): Number //若是单属性则第二位写0
		{
			var Restrain_to_RIVAL: Number
			if (left2 != 22 && right2 != 22) //双方都是双属性
			{
				//trace("双方都是双属性")
				if ((Restrain[left1][right1] != 0 && Restrain[left1][right2] != 0) && (Restrain[left2][right1] != 0 && Restrain[left2][right2] != 0)) //正常克制系数
				{
					if (Restrain[left1][right1] == 2 && Restrain[left1][right2] == 2)
					{
						if (Restrain[left2][right1] == 2 && Restrain[left2][right2] == 2)
						{
							Restrain_to_RIVAL = Number(((Restrain[left1][right1] + Restrain[left1][right2]) + (Restrain[left2][right1] + Restrain[left2][right2])) / 2)
						}
						else
						{
							Restrain_to_RIVAL = Number(((Restrain[left1][right1] + Restrain[left1][right2]) + (Restrain[left2][right1] + Restrain[left2][right2]) / 2) / 2)
						}
					}
					else if (Restrain[left2][right1] == 2 && Restrain[left2][right2] == 2)
					{
						if (Restrain[left1][right1] == 2 && Restrain[left1][right2] == 2)
						{
							Restrain_to_RIVAL = Number(((Restrain[left1][right1] + Restrain[left1][right2]) / 2 + (Restrain[left2][right1] + Restrain[left2][right2])) / 2)
						}
						else
						{
							Restrain_to_RIVAL = Number(((Restrain[left1][right1] + Restrain[left1][right2]) / 2 + (Restrain[left2][right1] + Restrain[left2][right2])) / 2)
						}
					}
					else if ((Restrain[left1][right1] != 2 || Restrain[left1][right2] != 2) && (Restrain[left2][right1] != 2 || Restrain[left2][right2] != 2))
					{
						Restrain_to_RIVAL = Number(((Restrain[left1][right1] + Restrain[left1][right2]) / 2 + (Restrain[left2][right1] + Restrain[left2][right2]) / 2) / 2)
						trace("正常克制")
					}

				}
				else if ((Restrain[left1][right1] == 0 || Restrain[left1][right2] == 0) && (Restrain[left2][right1] != 0 && Restrain[left2][right2] != 0)) //对一号位属性无效
				{
					if (Restrain[left2][right1] == 2 && Restrain[left2][right2] == 2)
					{
						Restrain_to_RIVAL = Number((Number(Restrain[left1][right1] + Restrain[left1][right2]) / 4 + (Restrain[left2][right1] + Restrain[left2][right2])) / 2)
					}
					else
					{
						Restrain_to_RIVAL = Number((Number(Restrain[left1][right1] + Restrain[left1][right2]) / 4 + (Restrain[left2][right1] + Restrain[left2][right2]) / 2) / 2)
					}

				}
				else if ((Restrain[left1][right1] != 0 && Restrain[left1][right2] != 0) || (Restrain[left2][right1] == 0 || Restrain[left2][right2] == 0)) //对二号位属性无效
				{
					if (Restrain[left1][right1] == 2 && Restrain[left1][right2] == 2)
					{
						Restrain_to_RIVAL = Number(((Restrain[left1][right1] + Restrain[left1][right2]) + (Restrain[left2][right1] + Restrain[left2][right2]) / 4) / 2)
					}
					else
					{
						Restrain_to_RIVAL = Number(((Restrain[left1][right1] + Restrain[left1][right2]) / 2 + (Restrain[left2][right1] + Restrain[left2][right2]) / 4) / 2)
					}
					trace("对二号位属性无效")

				}

			}
			else if (left2 == 22 && right2 != 22) //本方是单属性，对方是双属性
			{
				if ((Restrain[left1][right1] != 0) && (Restrain[left1][right2] != 0)) //正常克制
				{
					if ((Restrain[left1][right1] == 2) && (Restrain[left1][right2] == 2))
					{
						Restrain_to_RIVAL = Number(((Restrain[left1][right1]) + (Restrain[left1][right2])))
					}
					else
					{
						Restrain_to_RIVAL = Number(((Restrain[left1][right1]) + (Restrain[left1][right2])) / 2)
					}

				}
				else if ((Restrain[left1][right1] == 0) || (Restrain[left1][right2] == 0)) //本方对对方任意一项属性无效
				{
					Restrain_to_RIVAL = Number(((Restrain[left1][right1]) + (Restrain[left1][right2])) / 4)
				}

			}
			else if (left2 != 22 && right2 == 22) //本方是双属性，对方是单属性
			{
				if ((Restrain[left1][right1] != 0) && (Restrain[left2][right1] != 0)) //正常克制
				{
					if ((Restrain[left1][right1] == 2) && (Restrain[left2][right1] == 2)) //本方单属性对对方双属性都克制
					{
						Restrain_to_RIVAL = Number(((Restrain[left1][right1]) + (Restrain[left2][right1])))
					}
					else
					{
						Restrain_to_RIVAL = Number(((Restrain[left1][right1]) + (Restrain[left2][right1])) / 2) //本方单属性对对方双属性不都克制
					}

				}
				else if ((Restrain[left1][right1] == 0) || (Restrain[left2][right1] == 0)) //本方任意一项属性对对方无效
				{
					Restrain_to_RIVAL = Number(((Restrain[left1][right1]) + (Restrain[left2][right1])) / 4)
				}
			}
			else if (left2 == 22 && right2 == 22) //双方为单属性
			{
				Restrain_to_RIVAL = Number(Restrain[left1][right1])
			}
			trace("克制系数" + Restrain_to_RIVAL)
			trace(Restrain[left1][right1])
			trace(Restrain[left1][right2])
			trace(Restrain[left2][right1])
			trace(Restrain[left2][right2])
			return Restrain_to_RIVAL;

		}

	}

}