//
//  SkiaPreviewView.swift
//  VisionCamera
//
//  Created by Marc Rousavy on 19.07.23.
//  Copyright © 2023 mrousavy. All rights reserved.
//

import Foundation

@available(iOS 13.0, *)
class SkiaPreviewLayer: CAMetalLayer {
  private var pixelRatio: CGFloat {
    return UIScreen.main.scale
  }
  
  init(device: MTLDevice) {
    super.init()
    
    framebufferOnly = false
    self.device = device
    isOpaque = false
    pixelFormat = .bgra8Unorm
    contentsScale = pixelRatio
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setSize(width: CGFloat, height: CGFloat) {
    frame = CGRect(x: 0, y: 0, width: width, height: height)
    drawableSize = CGSizeMake(width * pixelRatio,
                              height * pixelRatio)
  }
}

class SkiaPreviewView: PreviewView {
  private let skiaRenderer: SkiaRenderer
  private let previewLayer: SkiaPreviewLayer
  private lazy var displayLink = {
    return SkiaPreviewDisplayLink(callback: { [weak self] timestamp in
      // Called everytime to render the screen - e.g. 60 FPS
      if let self = self {
        self.skiaRenderer.renderLatestFrame(to: self.previewLayer)
      }
    })
  }()
  
  init(frame: CGRect, skiaRenderer: SkiaRenderer) {
    self.skiaRenderer = skiaRenderer
    self.previewLayer = SkiaPreviewLayer(device: skiaRenderer.metalDevice)
    super.init(frame: frame)
  }
  
  deinit {
    self.displayLink.stop()
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override func willMove(toSuperview newSuperview: UIView?) {
    if newSuperview != nil {
      self.layer.addSublayer(previewLayer)
      self.displayLink.start()
    } else {
      previewLayer.removeFromSuperlayer()
      self.displayLink.stop()
    }
  }
  
  override func layoutSubviews() {
    previewLayer.setSize(width: self.bounds.size.width,
                         height: self.bounds.size.height)
  }
}
