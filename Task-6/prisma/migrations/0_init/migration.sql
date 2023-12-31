BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[notebook] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [date] INT NOT NULL,
    [size] INT NOT NULL,
    CONSTRAINT [notebook_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

