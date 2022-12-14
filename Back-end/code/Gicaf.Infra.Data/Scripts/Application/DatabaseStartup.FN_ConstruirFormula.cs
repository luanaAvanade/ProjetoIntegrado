using System;
using System.Collections.Generic;
using System.Text;

namespace Gicaf.Infra.Data.Scripts
{
    public partial class DatabaseStartup
    {
        public const string FN_ConstruirFormula =
        @"
            IF EXISTS (SELECT * FROM sysobjects WHERE id = object_id(N'fn_ConstruirFormula') AND xtype IN (N'FN', N'IF', N'TF'))
            BEGIN
                DROP FUNCTION fn_ConstruirFormula
            END
            
            GO            

            /****** Object:  UserDefinedFunction [dbo].[fn_ConstruirFormula]    Script Date: 2019-12-02 5:43:30 PM ******/
            SET ANSI_NULLS ON
            GO

            SET QUOTED_IDENTIFIER ON
            GO

            -- =============================================
            -- Author:		<Author,,Name>
            -- Create date: <Create Date, ,>
            -- Description:	<Description, ,>
            -- =============================================
            CREATE FUNCTION [dbo].[fn_ConstruirFormula]
            (
	            @templateFormula varchar(max),
	            @categoriaId bigint
            )
            RETURNS varchar(max)
            AS
            BEGIN
	            DECLARE @end BIT = 0

	            DECLARE @indexBegin int = 0
	            DECLARE @indexEnd int = 0
	            DECLARE @strReplace VARCHAR(MAX) = 0
	            DECLARE @perguntaId varchar(10) = null
	            DECLARE @valor float = null

	            WHILE(@end = 0)
	            BEGIN
		            set @indexBegin = CHARINDEX('{P',@templateFormula,0)
		            set @indexEnd = CHARINDEX('}',@templateFormula,@indexBegin)
		
		            IF(@indexBegin > 0 AND @indexEnd > 0)
		            BEGIN
			            set @strReplace = SUBSTRING(@templateFormula, @indexBegin, @indexEnd-@indexBegin+1)

			            set @perguntaId = SUBSTRING(@strReplace,3,charindex('}', @strReplace)-3)

			            select @valor = Nota 
			            from Resultado where perguntaId = @perguntaId AND categoriaId = @categoriaId

			            set @templateFormula = REPLACE(@templateFormula, @strReplace, @valor)
		            END
		            ELSE
		            BEGIN
			            set @end = 1
		            END
	            END
	            return @templateFormula
            END
            GO
        ";
    }
}
