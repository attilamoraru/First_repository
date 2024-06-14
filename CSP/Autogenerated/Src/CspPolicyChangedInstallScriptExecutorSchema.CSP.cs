namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CspPolicyChangedInstallScriptExecutorSchema

	/// <exclude/>
	public class CspPolicyChangedInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CspPolicyChangedInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CspPolicyChangedInstallScriptExecutorSchema(CspPolicyChangedInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c4f575c7-f62a-40d4-8a71-b0ccd5c3e91c");
			Name = "CspPolicyChangedInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("03ae62ce-75a7-4e4f-a795-214fbd9cfd1f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,93,111,155,48,20,125,166,82,255,131,197,94,64,154,81,32,128,113,187,230,97,73,87,33,117,82,166,108,218,179,177,175,19,36,98,50,27,186,69,81,254,123,205,199,186,166,73,165,189,32,221,115,207,185,231,114,125,20,219,130,217,49,14,232,59,104,205,76,45,155,96,94,43,89,174,91,205,154,178,86,215,87,135,235,43,167,53,165,90,163,213,222,52,176,189,125,83,91,126,85,1,239,200,38,120,0,5,186,228,103,156,199,82,253,250,7,190,246,210,240,30,30,44,62,219,150,109,126,208,176,182,211,209,188,98,198,220,160,185,217,45,235,170,228,251,249,134,169,53,136,92,153,134,85,213,138,235,114,215,220,255,1,222,54,181,238,133,187,182,176,60,196,59,221,255,201,208,13,202,223,153,231,28,250,153,47,219,124,133,102,83,11,187,207,178,119,25,154,163,227,83,93,10,52,72,193,251,97,64,219,155,170,225,70,168,61,41,125,212,221,215,113,242,123,213,110,65,179,162,130,79,15,109,41,102,104,109,191,6,221,33,5,191,209,99,105,154,17,30,232,78,135,118,128,231,30,4,165,148,51,202,113,202,73,136,227,20,38,152,66,74,240,84,18,201,50,154,17,128,228,232,250,31,207,132,9,77,4,23,4,112,60,37,210,10,163,2,83,25,114,204,67,146,69,36,22,69,68,194,139,194,52,204,34,25,9,192,4,36,197,113,66,172,163,72,167,88,242,201,68,70,144,198,188,40,46,10,179,130,37,33,36,9,102,98,154,224,24,178,4,83,154,134,152,203,16,82,152,210,130,135,226,162,16,120,70,82,146,90,179,80,88,225,36,10,113,54,161,133,245,78,152,253,75,98,7,116,194,94,119,188,61,187,232,183,22,244,126,201,180,77,123,3,122,134,12,116,137,181,25,232,47,220,95,58,88,245,152,87,160,187,89,127,243,83,141,87,248,254,48,215,235,154,11,75,182,79,251,230,45,135,181,157,224,139,174,183,158,107,163,111,51,183,0,185,210,60,87,139,82,91,214,147,251,66,250,185,1,13,158,155,11,215,15,114,229,189,90,201,71,204,140,14,35,59,248,155,165,97,135,227,152,68,80,98,8,99,95,15,232,41,104,177,103,57,87,67,46,227,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c4f575c7-f62a-40d4-8a71-b0ccd5c3e91c"));
		}

		#endregion

	}

	#endregion

}

