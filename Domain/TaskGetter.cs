using Infrastructure;

namespace Domain
{
	public class TaskGetter : BusinessBase
	{
		public static TaskGetter Get()
		{
			return new TaskGetter();
		}
	}
}
