package
{

	public class Attribution
	{

		private var name: String;
		private var attri: Number;

		public function Attribution(name: String, attri: Number)
		{
			this.name = name;
			this.attri = attri;
		}

		public function getAttribution(): Number
		{
			return attri;
		}

		public function toString(): String
		{
			return name + ":" + attri;
		}

	}

}