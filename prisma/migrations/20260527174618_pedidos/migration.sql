-- AddForeignKey
ALTER TABLE `pedido` ADD CONSTRAINT `pedido_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
