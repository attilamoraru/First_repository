﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SsoActionsServiceSchema

	/// <exclude/>
	public class SsoActionsServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SsoActionsServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SsoActionsServiceSchema(SsoActionsServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9846a86d-b93f-45b4-a36c-9decd3971164");
			Name = "SsoActionsService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("215e526d-f587-4ae6-bb01-1466a5b04094");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,223,79,219,48,16,126,46,18,255,131,85,30,72,167,225,190,78,180,32,117,221,24,149,6,76,164,21,72,104,154,220,228,74,173,197,78,118,118,42,42,196,255,190,179,157,180,105,161,133,183,248,114,223,221,119,223,253,208,66,129,41,68,2,108,12,136,194,228,51,203,135,185,158,201,199,18,133,149,185,230,177,201,99,176,86,234,71,115,120,240,124,120,208,42,13,125,179,120,105,44,168,222,214,155,143,110,94,153,98,192,133,76,224,42,79,33,219,251,147,223,193,116,191,195,32,177,114,225,105,173,253,154,188,17,248,133,72,108,142,18,204,91,30,148,128,188,148,218,133,87,69,174,65,219,216,9,194,71,218,2,206,232,203,133,34,247,35,132,71,202,204,134,153,48,230,148,145,46,142,78,174,77,69,209,59,61,84,15,210,208,34,81,249,237,108,3,83,92,131,117,225,137,251,84,102,210,46,111,225,95,41,17,20,101,51,81,243,225,10,101,103,236,29,136,243,226,149,33,237,184,36,69,57,205,100,194,18,71,238,53,55,118,202,190,10,3,245,235,217,115,93,85,116,5,118,158,167,84,211,47,116,242,134,74,90,221,110,151,245,77,169,148,192,229,121,109,184,5,91,162,54,44,41,17,137,8,19,69,65,105,125,75,88,137,25,95,1,187,219,200,62,6,232,249,112,7,180,223,173,61,28,164,8,84,152,177,232,186,244,3,236,160,40,38,152,69,29,199,190,213,106,45,4,50,36,5,192,88,210,235,210,218,194,105,14,79,118,144,80,203,76,142,156,48,35,109,172,208,9,68,29,175,22,249,246,86,96,93,170,41,32,97,39,6,144,176,26,188,100,252,46,199,191,126,37,248,181,247,224,227,60,246,36,162,78,0,7,154,117,114,238,132,37,98,124,140,82,125,215,105,164,107,212,112,46,112,64,195,181,140,58,1,249,178,71,88,218,49,227,67,186,142,178,57,136,20,208,48,155,147,205,208,84,26,96,178,170,101,135,198,181,96,139,92,166,46,218,109,133,187,12,161,86,186,85,130,38,78,44,109,191,73,242,50,210,55,225,140,181,133,181,34,153,187,17,235,177,153,204,64,211,121,248,116,54,25,95,156,124,57,62,78,16,92,183,254,40,176,34,21,86,240,39,149,181,215,122,38,65,254,143,52,35,128,42,0,175,153,242,97,224,52,94,22,224,201,172,7,164,75,169,122,44,33,65,13,216,192,167,189,35,200,32,77,67,201,81,187,138,119,210,40,178,253,249,141,202,55,186,115,4,58,13,123,177,107,73,252,166,125,96,71,226,193,213,79,86,139,197,238,233,225,36,101,179,28,87,235,51,12,146,190,215,219,141,253,185,87,89,8,68,157,4,161,182,246,230,225,166,128,112,185,155,39,168,245,64,167,143,90,16,77,80,142,65,21,153,155,20,146,152,76,177,80,217,85,69,178,237,79,73,125,75,98,31,159,109,249,108,44,96,163,69,180,2,20,177,177,167,235,201,48,13,56,249,248,3,26,238,244,210,205,69,127,212,140,127,94,35,223,154,225,141,5,108,134,117,113,226,98,197,113,147,215,190,254,6,235,166,241,229,63,121,128,32,176,22,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9846a86d-b93f-45b4-a36c-9decd3971164"));
		}

		#endregion

	}

	#endregion

}
