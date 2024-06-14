﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WorkingIntervalSchema

	/// <exclude/>
	public class WorkingIntervalSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WorkingIntervalSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WorkingIntervalSchema(WorkingIntervalSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6a090ccf-6e88-44ca-828b-e8f931fed71b");
			Name = "WorkingInterval";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,85,81,107,219,48,16,126,78,161,255,225,72,161,36,144,38,239,105,226,177,181,99,20,54,86,72,161,207,138,125,78,180,218,146,145,228,132,80,250,223,119,210,217,174,107,103,93,202,246,144,224,200,119,167,239,190,239,187,139,18,57,218,66,196,8,15,104,140,176,58,117,211,27,173,82,185,41,141,112,82,171,233,141,200,80,37,194,216,243,179,231,243,179,65,105,165,218,192,234,96,29,230,215,231,103,116,114,97,112,67,129,131,149,51,101,236,96,14,143,218,60,81,208,157,114,104,118,34,11,65,179,217,12,22,182,204,115,97,14,81,245,251,51,88,78,113,91,225,192,96,97,208,162,114,22,4,236,185,4,200,170,6,236,165,219,194,202,9,227,64,168,4,190,210,167,208,50,4,91,120,144,57,174,10,161,64,175,127,97,236,108,85,223,7,138,204,106,40,140,222,201,4,45,88,157,35,148,78,102,210,73,250,233,116,184,136,139,75,55,173,113,206,90,64,139,114,157,201,184,70,218,107,109,240,28,218,107,72,184,55,186,64,19,170,207,225,62,228,114,64,151,128,112,192,13,57,130,207,221,76,155,200,54,132,26,67,211,38,167,121,53,6,131,13,186,235,240,80,24,185,19,14,193,86,7,47,239,220,235,233,251,240,173,62,233,31,238,124,216,34,144,147,54,91,7,58,37,201,241,85,220,150,132,39,98,249,78,133,72,179,6,78,245,52,48,232,74,195,80,175,152,38,6,250,210,66,119,65,118,102,181,222,74,71,182,103,149,181,57,73,188,27,131,212,59,25,80,81,39,214,9,69,67,68,157,41,220,247,236,251,135,174,194,73,33,140,200,65,209,28,46,135,214,35,30,70,61,91,44,102,33,234,120,18,181,51,140,58,138,182,19,42,238,58,214,29,53,92,134,75,39,175,220,82,189,113,32,109,78,42,73,59,26,87,228,50,170,37,199,51,173,254,214,165,79,184,62,129,223,31,232,182,58,57,141,218,45,198,79,22,100,202,61,197,58,47,180,162,213,80,59,103,35,119,168,32,33,250,61,106,88,99,166,213,38,204,179,71,252,97,218,235,66,195,168,71,52,27,202,210,139,250,169,69,233,90,235,12,190,161,187,179,183,84,225,11,186,61,162,26,221,214,176,234,178,53,129,149,57,235,227,169,255,250,153,222,138,3,68,203,106,166,47,47,143,189,94,44,189,163,255,62,97,166,84,113,176,36,79,215,142,167,107,125,240,187,53,19,177,119,100,16,143,23,94,135,68,34,91,186,255,72,101,67,3,47,229,247,61,108,36,237,133,97,116,167,18,89,117,192,189,144,111,32,145,134,242,253,95,81,147,26,71,41,45,118,92,204,226,8,114,20,202,66,92,58,231,251,203,48,117,30,124,40,56,241,145,84,137,3,175,248,208,191,245,81,125,64,181,194,53,143,73,127,142,143,218,160,51,89,141,14,125,39,76,216,50,140,99,9,161,137,218,29,196,255,232,152,246,236,140,113,103,195,121,113,90,171,45,100,247,156,216,24,176,155,205,0,248,104,240,41,172,172,238,122,88,241,86,232,35,26,87,105,243,163,105,253,248,137,247,238,184,141,181,158,3,76,69,153,185,81,167,196,248,157,93,194,167,111,15,95,126,3,135,67,83,94,195,8,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6a090ccf-6e88-44ca-828b-e8f931fed71b"));
		}

		#endregion

	}

	#endregion

}
