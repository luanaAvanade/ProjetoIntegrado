using System;
using System.Collections.Generic;
using System.Text;

namespace Gicaf.Infra.Data.Scripts
{
    public partial class DatabaseStartup
    {
        public const string Pd_Stg2_P4_Prazos =
        @"
            /****** Object:  Table [dbo].[Pd_Stg2_P4_Prazos]    Script Date: 2019-12-02 8:34:20 PM ******/
            IF OBJECT_ID('dbo.Pd_Stg2_P4_Prazos', 'U') IS NOT NULL 
	            DROP TABLE [dbo].[Pd_Stg2_P4_Prazos]
            GO

            /****** Object:  Table [dbo].[Pd_Stg2_P4_Prazos]    Script Date: 2019-12-02 8:40:21 PM ******/
            SET ANSI_NULLS ON
            GO

            SET QUOTED_IDENTIFIER ON
            GO

            CREATE TABLE [dbo].[Pd_Stg2_P4_Prazos](
	        [Cod_Categoria] [varchar](10) NULL,
	        [Dsc_Categoria] [nvarchar](255) NULL,
	        [Prazo] [int] NULL
            ) ON [PRIMARY]
            GO
        ";
    }
}
