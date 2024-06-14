﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AppFeatureQueryExecutorSchema

	/// <exclude/>
	public class AppFeatureQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AppFeatureQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AppFeatureQueryExecutorSchema(AppFeatureQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e09189b3-ce31-4238-bc57-0dae2ce70160");
			Name = "AppFeatureQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f56dd55e-5084-4296-932e-a32f081a1593");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,88,91,111,219,54,20,126,118,129,254,7,214,5,2,25,48,244,3,226,57,65,226,56,157,177,222,86,187,123,9,130,64,145,232,148,155,76,186,164,228,214,8,252,223,119,120,145,120,145,100,43,219,128,189,196,17,121,238,231,59,135,135,164,201,6,139,109,146,98,180,194,156,39,130,173,139,248,106,187,189,197,73,81,114,44,94,191,122,126,253,106,80,10,66,159,208,114,47,10,188,153,4,223,241,140,229,57,78,11,194,168,136,223,97,138,57,73,27,52,239,9,253,110,23,103,28,164,19,22,27,37,43,246,244,148,195,58,72,162,107,242,84,114,185,73,79,147,127,230,108,71,50,204,133,37,181,62,204,24,199,93,235,93,138,2,170,57,45,72,65,112,167,248,248,54,73,11,198,143,81,44,11,109,6,236,191,229,248,9,180,161,89,158,8,113,142,108,140,127,47,49,223,207,127,226,180,4,98,69,122,119,131,215,73,153,23,215,132,102,32,52,42,246,91,204,214,209,66,25,180,247,232,71,99,244,17,50,136,166,104,216,33,113,56,186,7,145,132,22,152,211,36,71,169,84,223,165,29,157,163,235,68,248,107,99,212,166,23,68,62,43,91,107,191,110,9,206,51,112,236,51,39,187,164,192,122,115,171,63,144,40,32,212,41,130,68,102,140,230,123,244,233,241,79,128,140,146,248,139,49,228,6,139,148,147,45,200,190,64,15,204,238,131,107,20,255,56,193,17,73,101,3,73,119,67,20,20,19,32,19,5,135,232,141,145,254,189,64,207,138,104,240,60,156,177,12,15,199,136,66,224,32,172,13,105,177,140,232,8,29,198,21,189,252,126,9,125,181,5,118,28,99,115,200,92,238,37,43,121,122,84,159,166,0,30,197,114,24,163,172,222,67,211,11,231,75,91,54,241,115,209,51,9,241,45,201,1,51,16,57,168,150,2,255,44,208,195,58,88,49,130,107,108,153,44,235,120,35,35,114,145,173,152,52,227,67,178,157,37,233,55,252,27,222,75,35,135,110,53,227,135,38,241,208,72,127,139,105,166,33,230,227,13,108,0,69,165,172,64,137,186,242,49,39,169,113,84,253,223,133,241,232,171,192,28,152,169,238,89,168,244,62,71,42,164,231,232,17,202,32,242,183,198,110,137,13,71,6,78,141,160,160,169,78,228,105,208,54,35,108,16,58,208,27,11,232,156,243,93,146,151,137,244,17,234,160,218,30,172,248,254,29,46,26,18,175,247,139,204,144,104,104,12,14,178,51,201,143,99,145,252,128,139,111,236,84,233,46,84,242,84,63,67,160,219,126,157,136,167,204,181,191,20,47,177,16,240,171,68,76,90,149,237,24,201,208,50,217,97,137,133,21,91,100,128,135,227,122,198,109,133,255,174,36,217,5,90,55,160,85,229,206,245,73,168,191,211,192,183,192,25,21,205,129,34,189,235,134,247,61,136,105,42,117,51,81,185,219,200,32,116,81,154,153,85,153,205,232,5,94,233,29,187,97,26,202,226,11,212,251,39,168,119,123,78,183,181,92,219,52,68,21,30,83,199,70,160,57,102,154,122,1,198,92,20,159,184,57,180,162,191,118,91,153,116,248,137,255,0,240,2,147,195,53,138,33,64,58,140,107,136,34,68,12,53,27,156,219,207,8,109,51,109,64,214,40,178,37,0,129,178,68,35,95,97,93,53,28,195,138,43,109,98,106,196,74,12,58,167,35,72,183,248,126,162,244,95,67,67,203,60,111,75,189,204,213,37,242,92,56,22,135,74,119,96,229,85,150,17,133,143,28,134,161,45,230,114,92,65,111,166,74,43,58,59,51,230,158,96,136,117,59,81,201,138,134,181,61,112,2,177,178,64,250,40,70,4,34,121,118,6,63,136,136,0,104,117,92,140,203,245,198,164,127,56,244,136,129,0,78,214,253,21,211,171,71,3,163,141,124,100,44,175,244,206,127,18,81,44,232,205,99,101,151,145,205,217,15,192,175,254,88,66,165,110,146,88,77,150,216,104,249,218,86,235,192,4,253,170,0,108,67,249,148,27,170,130,36,34,127,215,217,138,170,97,161,229,16,238,96,48,211,72,127,6,127,188,112,248,220,129,162,155,189,158,47,28,78,51,81,28,97,130,198,28,240,44,196,156,38,143,57,206,78,177,221,50,62,43,57,199,180,144,33,62,46,36,204,161,236,56,73,46,240,164,55,250,167,26,253,33,40,193,58,23,142,186,252,106,164,234,198,223,218,77,172,230,154,58,254,53,17,202,65,171,4,124,135,211,115,3,125,218,241,223,109,151,186,23,78,44,185,60,96,160,189,170,8,1,161,249,212,19,131,90,140,63,178,98,246,45,161,79,216,20,82,91,112,96,2,194,174,95,61,34,228,151,123,157,128,235,189,105,224,126,221,99,147,158,186,155,152,5,217,6,84,213,145,134,0,47,42,93,64,106,97,107,105,23,85,214,130,110,161,20,31,25,130,34,53,114,153,41,138,174,25,210,67,26,92,101,250,29,134,4,38,47,97,206,79,25,139,211,13,72,117,68,187,104,155,162,187,38,81,6,116,241,124,179,45,246,22,87,224,197,66,52,209,163,205,143,42,211,107,45,169,174,165,26,172,163,58,222,47,24,22,52,224,187,199,43,147,12,199,124,224,8,135,147,182,25,36,180,110,172,131,217,148,167,194,17,82,79,188,154,13,193,237,25,83,159,36,245,177,83,247,137,255,25,45,61,217,56,22,78,177,232,47,240,235,138,243,100,175,33,210,118,209,117,250,209,155,99,62,85,62,104,227,208,11,80,252,48,106,28,232,182,3,31,124,99,221,140,152,169,227,242,164,7,232,92,222,232,239,238,209,179,203,127,240,146,89,167,190,247,221,165,121,1,52,151,137,206,170,56,90,0,141,123,204,191,186,50,152,102,154,74,50,224,56,121,131,208,92,187,132,183,151,174,150,147,136,110,223,46,47,81,199,107,136,218,175,7,152,96,98,107,191,173,232,112,234,49,201,98,90,250,29,174,69,238,120,165,159,111,176,248,94,5,79,250,147,90,126,253,176,211,16,241,53,184,216,185,34,71,54,48,206,173,64,182,38,237,193,18,243,29,73,113,188,160,144,124,10,255,216,250,168,135,54,39,170,55,158,12,87,34,196,182,103,25,67,164,29,198,120,197,222,195,233,92,233,250,239,59,114,123,175,82,255,78,101,172,205,163,130,136,63,39,92,152,51,68,184,93,227,116,211,144,194,198,45,33,234,234,34,13,202,49,50,23,143,30,103,150,51,88,57,34,223,4,67,156,63,195,183,223,18,90,204,168,175,6,15,213,249,211,61,169,117,28,69,3,11,88,57,77,69,192,95,201,58,120,77,210,210,185,157,178,89,15,219,68,170,169,158,54,131,140,85,59,90,196,98,78,203,13,230,114,76,106,67,158,206,22,206,228,59,145,196,175,251,106,42,129,175,214,155,97,129,60,58,54,84,185,114,83,223,120,211,170,134,243,190,55,118,207,178,58,137,61,114,216,239,94,55,105,64,167,113,231,251,199,51,246,1,97,56,236,106,41,222,220,111,159,60,220,17,58,184,184,105,195,189,214,109,209,222,231,166,80,1,47,176,100,208,52,227,46,80,45,31,158,218,229,215,50,61,228,118,66,91,239,31,127,128,27,183,61,172,121,167,74,80,17,135,182,195,89,189,244,125,193,27,182,195,117,229,221,114,182,81,39,225,169,39,191,230,3,85,21,232,206,190,91,157,192,65,171,109,61,180,101,238,21,125,172,13,140,92,69,117,74,195,40,133,70,42,9,110,92,219,39,26,189,234,47,30,254,6,48,115,169,89,157,27,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e09189b3-ce31-4238-bc57-0dae2ce70160"));
		}

		#endregion

	}

	#endregion

}
